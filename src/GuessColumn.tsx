import React, { useState, useEffect } from "react";
import CodeInput from "./CodeInput";
import { OptionsContext } from "./OptionsContext";

const DEFAULT_IMAGE = `url(${process.env.PUBLIC_URL}/images/CodeBlank.png)`;
const COLOR_IMAGES = [
    `url(${process.env.PUBLIC_URL}/images/CodeRed.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeBlue.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeYellow.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeGreen.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeOrange.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodePurple.png)`,
];

interface GuessColumnProps {
    onGuessChange: (guess: (number | null)[]) => void;
    registerColorSetter: (setter: (colorId: number) => void) => void;
    isDisabled?: boolean;
    resetTrigger?: number;
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

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        if (isDisabled) return;
        e.preventDefault();
        const colorId = parseInt(e.dataTransfer.getData("colorId"), 10);
        if (isNaN(colorId)) return;

        const newGuesses = [...guessIds];
        newGuesses[index] = colorId;
        setGuessIds(newGuesses);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        if (isDisabled) return;
        e.preventDefault();
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
        <div
          key={i}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, i)}
          style={{ width: '100%' }}
        >
          <CodeInput
            src={id === null ? DEFAULT_IMAGE : COLOR_IMAGES[id]}
            onClick={!isDisabled ? () => handleGuessClick(i) : undefined}
            isSelected={selectedIdx === i}
            onDragOver={!isDisabled ? handleDragOver : undefined}
            onDrop={!isDisabled ? (e) => handleDrop(e, i) : undefined}
          />
        </div>
      ))}
      <OptionsContext.Consumer>
        {({ onOptionClick }) => {
          if (onOptionClick) onOptionClick(setColorAtSelected);
          return null;
        }}
      </OptionsContext.Consumer>
    </div>
  );
};

export default GuessColumn;