import React from "react";
import CodeInput from "./CodeInput";

const GuessColumn: React.FC = () => {
    return (
        <div className="guess-column">
            <CodeInput src="url(/images/CodeBlank.png)"/>
            <CodeInput src="url(/images/CodeBlank.png)"/>
            <CodeInput src="url(/images/CodeBlank.png)"/>
            <CodeInput src="url(/images/CodeBlank.png)"/>
        </div>
    )
};

export default GuessColumn;