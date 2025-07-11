import React from "react";
import OptionsColumn from "./OptionsColumn";
import FullColumn from "./FullColumn";
import AnswerColumn from "./AnswerColumn";

const Board: React.FC = () => {
    return (
        <div className="board">
            <OptionsColumn/>
            <FullColumn/>
            <FullColumn/>
            <FullColumn/>
            <FullColumn/>
            <FullColumn/>
            <FullColumn/>
            <FullColumn/>
            <FullColumn/>
            <AnswerColumn/>
        </div>
    )
};

export default Board;