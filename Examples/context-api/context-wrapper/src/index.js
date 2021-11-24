import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UserContext = React.createContext();

// This class contains the state and provides it to
// child components using Context
class UserStore extends React.Component {
  state = {
    user: {
      avatar:
        'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b',
      name: 'Dave',
      followers: 1234,
      following: 123
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserAvatar = ({ size }) => (
  <UserContext.Consumer>
    {user => (
      <img
        className={`user-avatar ${size || ''}`}
        alt="user avatar"
        src={user.avatar}
      />
    )}
  </UserContext.Consumer>
);

const UserStats = () => (
  <UserContext.Consumer>
    {user => (
      <div className="user-stats">
        <div>
          <UserAvatar user={user} />
          {user.name}
        </div>
        <div className="stats">
          <div>{user.followers} Followers</div>
          <div>Following {user.following}</div>
        </div>
      </div>
    )}
  </UserContext.Consumer>
);

const Nav = () => (
  <div className="nav">
    <UserAvatar size="small" />
  </div>
);

const Content = () => (
  <div className="content">main content here</div>
);

const Sidebar = () => (
  <div className="sidebar">
    <UserStats />
  </div>
);

const Body = () => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);

const App = () => (
  <div className="app">
    <Nav />
    <Body />
  </div>
);

ReactDOM.render(
  <UserStore>
    <App />
  </UserStore>,
  document.querySelector('#root')
);
