import React from 'react';
import PropTypes from 'prop-types';
import './widget.scss'

class Widget extends React.Component {
  state = {
    opened: false,
  }

  handleOpen = () => {
  }

  render() {
    let body = "";
    if (this.state.opened) {
      body = (
        <div className="widget-dialog">
          <div className="widget-title">
            Open
          </div>
          <div className="widget-body">
            Body
          </div>
          <div className="widget-footer">
            Footer
          </div>
        </div>
      );
    }
    return (
      <div className="widget">
        Open
        {body}
      </div>
    );
  }
}

Widget.propTypes = {};

export default Widget;
