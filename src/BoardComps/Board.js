import { useState } from "react";
import React from "react";
import Cell from "./Cell/Cell";
import { colours } from "nodemon/lib/config/defaults";

const Board = ({size}) => {

    const createGrid = () => (
        new Array(size)
        .fill(null)
        .map(() => 
                new Array(size))
                .fill(null)
                .map(() => Math.random() < .5)
                )
        
    const [board, setBoard] = useState(createGrid())

    const toggleLights = (row, col) => {
        const copy = [...board.map(r => [...r])]

        copy[row][col] = !copy[row][col]
        if (row < size - 1)
            copy[row+1][col] = !copy[row+1][col]
        if (row > 0)
            copy[row-1][col] = !copy[row-1][col]
        if (row < size - 1)
            copy[row][col+1] = !copy[row][col+1]
        if (row > 0)
            copy[row][col-1] = !copy[row][col-1]

        setBoard(copy)
    }

    return (
       <div className="Board">
        {board.map((row , rowIndex) => 
            <div className="row" key={rowIndex}>
                {row.map((cell, colIndex) => (
                    <Cell key={`${rowIndex}, ${colIndex}`} isOn={board[rowIndex][colIndex]} rowIndex={rowIndex} colIndex={colIndex} />
                ))} 
            </div>
        )}
       </div> 
    )
}


export default Board