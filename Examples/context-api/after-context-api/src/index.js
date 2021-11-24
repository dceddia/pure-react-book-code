import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// First, we create a new context.
// createContext returns an object with 2 properties:
//   { Provider, Consumer }

// We'll use the Provider and Consumer below,
// but rather than pull them out individually,
// we can store the whole object in a variable.
// As long as it's named with UpperCase, we can use
// its properties in JSX expressions.
const UserContext = React.createContext();

// Components that need the data can tap into the context
// by rendering the Consumer. It uses the  "render props"
// pattern -- rendering a function as a child (more on that below).
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

// Notice that we don't need the 'user' prop any more!
// The Consumer fetches the user from context
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

// The components that once had to launder the `user` prop
// are now nice and simple.

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

// Inside App, we make the context available
// using the Provider
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
    return (
      <div className="app">
        <UserContext.Provider value={this.state.user}>
          <Nav />
          <Body />
        </UserContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
