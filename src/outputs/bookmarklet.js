import React from 'react';
import ReactDOM from 'react-dom';
import Widget from '../components/widget';

  const component = <Widget />;
  const el = document.createElement('div');
  document.body.appendChild(el);
  console.log('running bookmarklet');
  ReactDOM.render(
    component,
    el,
  );
