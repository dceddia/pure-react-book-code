import React, {Component} from 'react';
import SidebarPane from './SidebarPane';
import ChatPane from './ChatPane';
import EmptyChatPane from './EmptyChatPane';
import { channels, people, createFakeActivity } from './static-data';


function nextId(messages) {
  return messages.length ? messages[messages.length - 1].id + 1 : 0
}

function createMessage(text, messageId) {
  return {
    id: messageId,
    userName: 'Myself',
    text: text,
    timestamp: new Date()
  };
}

export default class Root extends Component {
  state = {
    channels,
    people,
    messagesByChannelId: createFakeActivity(channels, 15),
    messagesByPersonId: createFakeActivity(people, 5),
    selectedChannelId: null,
    selectedPersonId: null
  };

  handleChannelSelected = (channelId) => {
    this.setState({
      selectedChannelId: channelId,
      selectedPersonId: null
    });
  }

  handlePersonSelected = (personId) => {
    this.setState({
      selectedPersonId: personId,
      selectedChannelId: null
    });
  }

  handleSentMessage = (text) => {
    const {selectedChannelId, selectedPersonId} = this.state;

    if(selectedChannelId) {
      // set state to...
      this.setState({
        // the existing state...
        ...this.state,
        // but with messagesByChannelId set to:
        messagesByChannelId: {
          // all the existing messages for all channels...
          ...this.state.messagesByChannelId,
          // but with the messages for the selected channel replaced by:
          [selectedChannelId]: [
            // all of the existing messages...
            ...this.state.messagesByChannelId[selectedChannelId],
            // plus this new one.
            createMessage(text, nextId(this.state.messagesByChannelId[selectedChannelId]))
          ]
        }
      });
    }

    if(selectedPersonId) {
      // same kind of thing as above
      this.setState({
        ...this.state,
        messagesByPersonId: {
          ...this.state.messagesByPersonId,
          [selectedPersonId]: [
            ...this.state.messagesByPersonId[selectedPersonId],
            createMessage(text, nextId(this.state.messagesByPersonId[selectedPersonId]))
          ]
        }
      });
    }
  }

  // This is function is a genericized version of the two setState calls above,
  // but it's even harder to decipher what's going on. I left it here so you can
  // see how it works and make up your own mind whether you want to do it this way,
  // or the verbose-but-more-explicit way.
  //
  // Alternatively, if this makes your eyes bleed (I don't blame you), look at the
  // Immutable.js library to make this sort of thing easier
  addMessage(type, text, selectedId) {
    this.setState({
      ...this.state,
      [type]: {
        ...this.state[type],
        [selectedId]: [
          ...this.state[type][selectedId],
          createMessage(text, nextId(this.state[type][selectedId]))
        ]
      }
    });
  }

  render() {
    const {channels, people, selectedChannelId, selectedPersonId} = this.state;

    let messages = [];
    let isSomethingSelected = false;
    if(selectedChannelId) {
      messages = this.state.messagesByChannelId[selectedChannelId];
      isSomethingSelected = true;
    }
    if(selectedPersonId) {
      messages = this.state.messagesByPersonId[selectedPersonId];
      isSomethingSelected = true;
    }

    return (
      <div className='container'>
        <SidebarPane
          channels={channels}
          people={people}
          onChannelSelected={this.handleChannelSelected}
          onPersonSelected={this.handlePersonSelected}
          selectedChannelId={selectedChannelId}
          selectedPersonId={selectedPersonId} />
        {isSomethingSelected ?
          <ChatPane
            messages={messages}
            onSendMessage={this.handleSentMessage} />
          : <EmptyChatPane />
        }
      </div>
    );
  }
}
