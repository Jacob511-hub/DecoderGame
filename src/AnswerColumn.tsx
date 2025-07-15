import React from "react";
import CodeInput from "./CodeInput";

const AnswerColumn: React.FC = () => {
    return (
        <div className="answer-column">
            <CodeInput src="url(/images/CodeBlack.png)"/>
            <CodeInput src="url(/images/CodeBlack.png)"/>
            <CodeInput src="url(/images/CodeBlack.png)"/>
            <CodeInput src="url(/images/CodeBlack.png)"/>
        </div>
    )
};

export default AnswerColumn;