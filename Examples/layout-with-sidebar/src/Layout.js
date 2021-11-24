import React from 'react';

class Layout extends React.Component {
  state = {
    showSidebar: false
  }

  toggleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <div className="layout">
        {showSidebar &&
          <Sidebar
            onHide={this.toggleSidebar}>
            some sidebar content
          </Sidebar>}
        <Content
          isSidebarVisible={showSidebar}
          onShowSidebar={this.toggleSidebar}>
          some content here
        </Content>
      </div>
    );
  }
}

const Content = ({ children, isSidebarVisible, onShowSidebar }) => (
  <div className="content">
    {children}
    {!isSidebarVisible && (
      <button onClick={onShowSidebar}>
        Show
      </button>
    )}
  </div>
);

const Sidebar = ({
  onHide,
  children
}) => (
  <div className="sidebar">
    {children}
    <button onClick={onHide}>
      Hide
    </button>
  </div>
);

export default Layout;

/*
const Sidebar = ({ hidden, onToggleHide, children }) => (
  <div className={`sidebar ${hidden ? 'hidden' : ''}`}>
    {!hidden && <div className="sidebar__content">
      {children}
      <button onClick={onToggleHide} className="sidebar__hide">Hide</button>
    </div>}
    {hidden &&
      <button onClick={onToggleHide} className="sidebar__show">Show</button>}
  </div>
);

const Content = ({ children }) => (
  <div className="content">
    {children}
  </div>
)

class Layout extends React.Component {
  state = {
    isSidebarHidden: false
  }

  toggleSidebar = () => {
    this.setState({
      isSidebarHidden: !this.state.isSidebarHidden
    });
  }

  render() {
    return (
      <div className="layout">
        <Sidebar
          hidden={this.state.isSidebarHidden}
          onToggleHide={this.toggleSidebar}
        >
          The Sidebar
        </Sidebar>
        <Content>
          The Content
        </Content>
      </div>
    );
  }
}

export default Layout;
*/
