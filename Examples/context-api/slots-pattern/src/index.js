import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UserAvatar = ({ user, size }) => (
  <img
    className={`user-avatar ${size || ''}`}
    alt="user avatar"
    src={user.avatar}
  />
);

const UserStats = ({ user }) => (
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
);

// Accept children and render it/them
const Nav = ({ children }) => (
  <div className="nav">{children}</div>
);

const Content = ({ children }) => (
  <div className="content">{children}</div>
);

const Sidebar = ({ children }) => (
  <div className="sidebar">{children}</div>
);

// Body needs a sidebar and content, but written this way,
// they can be ANYTHING
const Body = ({ sidebar, children }) => (
  <div className="body">
    <Sidebar>{sidebar}</Sidebar>
    <Content>{children}</Content>
  </div>
);

class App extends React.Component {
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
    const { user } = this.state;

    return (
      <div className="app">
        <Nav>
          <UserAvatar user={user} size="small" />
        </Nav>
        <Body sidebar={<UserStats user={user} />}>
          here is the content, driven by the App
          component
        </Body>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
