import React from 'react'
import Square from './Square'

export const Board = ({ squares, onChange }) => {
    const renderSquare = (i) => {
        return(
            <Square
                id={i}
                onChange={(e) => onChange(e,i)}
                value={squares[i]}
            />
        );
    }

    let i = 0;
    return (
        <div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
            <div className='board-row'>
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
                {renderSquare(i++)}
            </div>
        </div>
    )
}
