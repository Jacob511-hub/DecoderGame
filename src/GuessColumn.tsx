import React, { useState } from "react";
import CodeInput from "./CodeInput";
import { OptionsContext } from "./OptionsContext";

const DEFAULT_IMAGE = "url(/images/CodeBlank.png)";
const COLOR_IMAGES = [
    "url(/images/CodeRed.png)",
    "url(/images/CodeBlue.png)",
    "url(/images/CodeYellow.png)",
    "url(/images/CodeGreen.png)",
    "url(/images/CodeOrange.png)",
    "url(/images/CodePurple.png)"
];

const GuessColumn: React.FC = () => {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [guessIds, setGuessIds] = useState<(number | null)[]>([null, null, null, null]);

    const handleGuessClick = (index: number) => {
        setSelectedIdx(index);
    };

    const setColorAtSelected = (colorId: number) => {
        if (selectedIdx === null) return;

        const newGuesses = [...guessIds];
        newGuesses[selectedIdx] = colorId;
        setGuessIds(newGuesses);
    };

    return (
        <div className="guess-column">
            {guessIds.map((id, i) => (
                <CodeInput
                    key={i}
                    src={id === null ? DEFAULT_IMAGE : COLOR_IMAGES[id]}
                    onClick={() => handleGuessClick(i)}
                    isSelected={selectedIdx === i}
                />
            ))}
            <OptionsContext.Consumer>
                {({ onOptionClick }) => {
                    if (onOptionClick) onOptionClick(setColorAtSelected);
                    return null;
                }}
            </OptionsContext.Consumer>
        </div>
    )
};

export default GuessColumn;