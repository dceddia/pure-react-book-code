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

// This is a "higher-order component" aka HoC aka
// a function that returns a component! It takes a
// Component as a prop and then it wraps it in another
// one, so that it's able to pass in its own props
function withUser(Component) {
  return function ConnectedComponent(props) {
    return (
      <UserContext.Consumer>
        {user => <Component {...props} user={user} />}
      </UserContext.Consumer>
    );
  };
}

// In this component and the one below, we've wrapped
// the component function in the withUser() higher-order
// component, which taps into Context and injects the `user` prop.
const UserAvatar = withUser(({ size, user }) => (
  <img
    className={`user-avatar ${size || ''}`}
    alt="user avatar"
    src={user.avatar}
  />
));

const UserStats = withUser(({ user }) => (
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
));

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
