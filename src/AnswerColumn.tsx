import React from "react";
import CodeInput from "./CodeInput";

const AnswerColumn: React.FC = () => {
    return (
        <div className="answer-column">
            <CodeInput />
            <CodeInput />
            <CodeInput />
            <CodeInput />
        </div>
    )
};

export default AnswerColumn;