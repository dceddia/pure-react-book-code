import React from 'react';
import ReactDOM from 'react-dom';
import targetIcon from './images/target-icon.png';
import './index.css';

function IconButton({ children }) {
  return (
    <button>
      <img className="target-icon" src={targetIcon} alt="icon" />
      {children}
    </button>
  );
}

function Nav({ children }) {
  let items = React.Children.toArray(children);
  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(
      i,
      0,
      <span key={i} className="separator">
        |
      </span>
    );
  }

  return <div className="nav">{items}</div>;
}

export function Demo() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 10 }}>
          <code>IconButton</code> with text:
        </div>
        <IconButton>Do Stuff</IconButton>
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 10 }}>
          <code>IconButton</code> with no text:
        </div>
        <IconButton />
      </div>
      <div>
        <div style={{ marginBottom: 10 }}>
          <code>Nav</code> with a few items:
        </div>
        <Nav>
          <a href="https://google.com">Google</a>
          <a href="https://slack.com">Slack</a>
        </Nav>
      </div>
    </div>
  );
}

ReactDOM.render(<Demo />, document.querySelector('#root'));
