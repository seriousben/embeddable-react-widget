import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    if (this.state.showDock) {
      return (
        <a className="dock" onClick={this.handleToggleOpen}>
          ^ OPEN ^
        </a>
      );
    }
    return '';
  }

  render() {
    const body = this.renderBody();
    const { bodyText, headerText, footerText } = this.props

    return (
      <div className="docked-widget">
        <Transition in={this.state.opened} timeout={250} onExited={this.handleWidgetExit}>
          {status => (
            <div className={`widget widget-${status}`}>
              <div className="widget-header">
                <div className="widget-header-title">
                  {headerText}
                </div>
                <a className="widget-header-icon" onClick={this.handleToggleOpen}>
                  X
                </a>
              </div>
              <div className="widget-body">
                {bodyText}
              </div>
              <div className="widget-footer">
                {footerText}
              </div>
            </div>
          )}
        </Transition>
        {body}
      </div>
    );
  }
}

Widget.propTypes = {
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  footerText: PropTypes.string
}

Widget.defaultProps = {
  headerText: `Header`,
  bodyText: `Body`,
  footerText: `Footer`,
}

export default Widget;
