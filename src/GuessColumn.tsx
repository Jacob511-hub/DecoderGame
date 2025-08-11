import React, { useState, useEffect } from "react";
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

interface GuessColumnProps {
    onGuessChange: (guess: (number | null)[]) => void;
    registerColorSetter: (setter: (colorId: number) => void) => void;
    isDisabled?: boolean;
    resetTrigger?: number; // NEW
}

const GuessColumn: React.FC<GuessColumnProps> = ({ onGuessChange, registerColorSetter, isDisabled, resetTrigger }) => {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [guessIds, setGuessIds] = useState<(number | null)[]>([null, null, null, null]);

    useEffect(() => {
        onGuessChange(guessIds);
    }, [guessIds, onGuessChange]);

    useEffect(() => {
        setGuessIds([null, null, null, null]);
        setSelectedIdx(null);
    }, [resetTrigger]);

    const handleGuessClick = (index: number) => {
        setSelectedIdx(index);
    };

    const setColorAtSelected = (colorId: number) => {
        if (selectedIdx === null) return;

        const newGuesses = [...guessIds];
        newGuesses[selectedIdx] = colorId;
        setGuessIds(newGuesses);
        
        const nextIndex = selectedIdx + 1;
        if (nextIndex < newGuesses.length) {
            setSelectedIdx(nextIndex);
        } else {
            setSelectedIdx(null);
        }
    };

    useEffect(() => {
        if (!isDisabled) {
            registerColorSetter(setColorAtSelected);
        }
    }, [registerColorSetter, isDisabled]);

    useEffect(() => {
        if (!isDisabled) {
            setSelectedIdx(0);
        }
    }, [isDisabled]);

    useEffect(() => {
        if (isDisabled) {
            setSelectedIdx(null);
        }
    }, [isDisabled]);

    return (
        <div className="guess-column">
            {guessIds.map((id, i) => (
                <CodeInput
                    key={i}
                    src={id === null ? DEFAULT_IMAGE : COLOR_IMAGES[id]}
                    onClick={!isDisabled ? () => handleGuessClick(i) : undefined}
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