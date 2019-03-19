import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './components/Board';
import { observe } from './components/Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
    ReactDOM.render(
        <Board knightPosition={knightPosition} />,
        rootEl
    )  
);


