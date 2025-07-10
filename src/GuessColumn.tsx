import React from "react";
import CodeInput from "./CodeInput";

const GuessColumn: React.FC = () => {
    return (
        <div className="guess-column">
            <CodeInput />
            <CodeInput />
            <CodeInput />
            <CodeInput />
        </div>
    )
};

export default GuessColumn;