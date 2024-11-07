import { useState } from "react";
import Square from "./Square";

function Board() {
    const [value, setValue] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    
    const buttonHandleClick = (i) => {
        if (value[i] || calculateWinner(value)) {
            return;
        }
        const nextSquare = value.slice();
        xIsNext ? nextSquare[i] = "X" : nextSquare[i] = "O";
        setValue(nextSquare);
        setXisNext(!xIsNext);    
    }
    return (
        <div className="board-container">
        <div className="board-row">
            <Square value={value[0]} handleClick={() => buttonHandleClick(0)} />
            <Square value={value[1]} handleClick={() => buttonHandleClick(1)} />
            <Square value={value[2]} handleClick={() => buttonHandleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={value[3]} handleClick={() => buttonHandleClick(3)} />
            <Square value={value[4]} handleClick={() => buttonHandleClick(4)} />
            <Square value={value[5]} handleClick={() => buttonHandleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={value[6]} handleClick={() => buttonHandleClick(6)} />
            <Square value={value[7]} handleClick={() => buttonHandleClick(7)} />
            <Square value={value[8]} handleClick={() => buttonHandleClick(8)} />

        </div>
    </div>
);
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}
export default Board;