import React, { useContext } from "react";
import CodeInput from "./CodeInput";
import { OptionsContext } from "./OptionsContext";

const CODES = [
    { id: 0, src: "url(./images/CodeRed.png)" },
    { id: 1, src: "url(./images/CodeBlue.png)" },
    { id: 2, src: "url(./images/CodeYellow.png)" },
    { id: 3, src: "url(./images/CodeGreen.png)" },
    { id: 4, src: "url(./images/CodeOrange.png)" },
    { id: 5, src: "url(./images/CodePurple.png)" },
];

const OptionsColumn: React.FC = () => {
    const { triggerColorSelect } = useContext(OptionsContext);

    return (
        <div className="options-column">
            {CODES.map(({ id, src }) => (
                <CodeInput
                    key={id}
                    src={src}
                    onClick={() => triggerColorSelect?.(id)}
                />
            ))}
        </div>
    );
};

export default OptionsColumn;