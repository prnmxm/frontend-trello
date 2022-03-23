import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Board } from '../pages/board';

function App() {
  return <Board />;
}
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
