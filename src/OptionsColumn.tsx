import React from "react";
import CodeInput from "./CodeInput";

const OptionsColumn: React.FC = () => {
    return (
        <div className="options-column">
            <CodeInput src="url(/images/CodeRed.png)"/>
            <CodeInput src="url(/images/CodeBlue.png)"/>
            <CodeInput src="url(/images/CodeYellow.png)"/>
            <CodeInput src="url(/images/CodeGreen.png)"/>
            <CodeInput src="url(/images/CodeOrange.png)"/>
            <CodeInput src="url(/images/CodePurple.png)"/>
        </div>
    )
};

export default OptionsColumn;