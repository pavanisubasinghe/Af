import React from 'react';
import ReactDOM from 'react-dom';
import AppPavi from './AppPavi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppPavi />, div);
  ReactDOM.unmountComponentAtNode(div);
});
