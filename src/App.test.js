import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div); //랜더링할 결과물.
  ReactDOM.unmountComponentAtNode(div);
});
