import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget';

export default class EmbeddableWidget {
  static render() {
    const component = <Widget />;

    function doRender() {
      const containerEl = document.createElement('div');
      document.body.appendChild(containerEl);
      ReactDOM.render(
        component,
        containerEl,
      );
    }
    if (document.readyState === 'complete') {
      doRender();
    } else {
      window.addEventListener('load', () => {
        doRender();
      });
    }
  }
}
