import React from "react";
import GuessColumn from "./GuessColumn";

const Board: React.FC = () => {
    return (
        <div className="board">
            <GuessColumn/>
            <GuessColumn/>
            <GuessColumn/>
            <GuessColumn/>
            <GuessColumn/>
            <GuessColumn/>
            <GuessColumn/>
            <GuessColumn/>
        </div>
    )
};

export default Board;