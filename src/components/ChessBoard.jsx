import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSquareColor } from '../Store.jsx';

const ChessBoard = () => {
    const dispatch = useDispatch();
    const board = useSelector((state) => state.chessboard);

    // calculate square is black or white
    const getSquareColor = (index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        return (row + col) % 2 === 0 ? 'white' : 'black';
    };

    const handleSquareClick = (index) => {
        const currentColor = getSquareColor(index);
        dispatch(changeSquareColor({ index, currentColor }));
    };

    return (
        <div className="grid grid-cols-8 gap-1 p-4">
            {board.map((square, index) => (
                <div
                    key={index}
                    onClick={() => handleSquareClick(index)}
                    className={`w-16 h-16 flex justify-center items-center ${board[index] || getSquareColor(index)
                        }`}
                    style={{ backgroundColor: board[index] || getSquareColor(index) }}
                ></div>
            ))}
        </div>
    );
};

export default ChessBoard;
