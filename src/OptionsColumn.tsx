import React from "react";
import CodeInput from "./CodeInput";

const OptionsColumn: React.FC = () => {
    return (
        <div className="options-column">
            <CodeInput />
            <CodeInput />
            <CodeInput />
            <CodeInput />
            <CodeInput />
            <CodeInput />
        </div>
    )
};

export default OptionsColumn;