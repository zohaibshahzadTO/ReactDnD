import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';
import { moveKnight } from './Game';
import { canMoveKnight } from './Game';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';

class Board extends Component {
    renderSquare(i, knightPosition) {
        const x = i % 8;
        const y = Math.floor(i / 8);

        const [knightX, knightY] = this.props.knightPosition;
        const piece = (x === knightX && y === knightY) ?
            <Knight /> :
            null;

        return (
            <div key={i}
                style={{ width: '12.5%', height: '12.5%' }}>
                <BoardSquare x={x} y={y}>
                    {renderSquare(x, y, knightPosition)}
                </BoardSquare>
            </div>
        );
    }

    handleSquareClick(toX, toY) {
        if (canMoveKnight(toX, toY)) {
            moveKnight(toX, toY);
        }
    }

    render() {

        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div style={{
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {squares}
                </div>
            </DragDropContextProvider>
        );
    }
}

Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};

export default DragDropContextProvider(HTML5Backend)(Board);
