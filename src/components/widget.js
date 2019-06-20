import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './widget.scss';

class Widget extends Component {
  state = {
    opened: false,
    showDock: true,
  }

  handleToggleOpen = () => {
    this.setState((prev) => {
      let { showDock } = prev;
      if (!prev.opened) {
        showDock = false;
      }
      return {
        showDock,
        opened: !prev.opened,
      };
    });
  }

  handleWidgetExit = () => {
    this.setState({
      showDock: true,
    });
  }

  renderBody = () => {
    const { showDock } = this.state;

    if (!showDock) return '';

    return (
      <button
        type="button"
        className="dock"
        onClick={this.handleToggleOpen}
        onKeyPress={this.handleToggleOpen}
      >
        ^ OPEN ^
      </button>
    );
  }

  render() {
    const { opened } = this.state;
    const body = this.renderBody();

    return (
      <div className="docked-widget">
        <Transition in={opened} timeout={250} onExited={this.handleWidgetExit}>
          {status => (
            <div className={`widget widget-${status}`}>
              <div className="widget-header">
                <div className="widget-header-title">
                  Header
                </div>
                <button
                  type="button"
                  className="widget-header-icon"
                  onClick={this.handleToggleOpen}
                  onKeyPress={this.handleToggleOpen}
                >
                  X
                </button>
              </div>
              <div className="widget-body">
                Body
              </div>
              <div className="widget-footer">
                Footer
              </div>
            </div>
          )}
        </Transition>
        {body}
      </div>
    );
  }
}

export default Widget;
