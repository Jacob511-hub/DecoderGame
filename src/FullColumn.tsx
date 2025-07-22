import React, { useState, useRef } from "react";
import Score from "./Score";
import GuessColumn from "./GuessColumn";
import ConfirmButton from "./ConfirmButton";
import { useAnswerArray } from "./AnswerArrayContext";
import { checkGuess } from "./utils/checkGuess";

interface FullColumnProps {
    index: number;
    isActive: boolean;
    isLockedIn: boolean;
    onGuessConfirmed: (wasCorrect: boolean) => void;
}

const FullColumn: React.FC<FullColumnProps> = ({ isActive, isLockedIn, onGuessConfirmed }) => {
    const [guess, setGuess] = useState<(number | null)[]>([null, null, null, null]);
    const [scoreResult, setScoreResult] = useState<("green" | "yellow" | "red" | "black")[]>(["black", "black", "black", "black"]);
    const colorSetterRef = useRef<((colorId: number) => void) | null>(null);

    const { AnswerArray, setRevealAnswer } = useAnswerArray();

    const handleConfirm = () => {
        if (guess.includes(null)) return;
        const filteredGuess = guess as number[];
        const result = checkGuess(filteredGuess, AnswerArray);
        setScoreResult(result);

        const isCorrect = result.every((color) => color === "green");
        if (isCorrect) {
            setRevealAnswer(true);
        }

        onGuessConfirmed(isCorrect);
    };

    const columnClass = isActive || isLockedIn ? "full-column active" : "full-column disabled";

    return (
        <div className={columnClass}>
            <Score result={scoreResult} />
            <GuessColumn
                onGuessChange={setGuess}
                registerColorSetter={(setter) => {
                    if (isActive && !isLockedIn) colorSetterRef.current = setter;
                }}
                isDisabled={!isActive || isLockedIn}
            />
            <ConfirmButton onClick={handleConfirm} disabled={!isActive || isLockedIn} />
        </div>
    );
};

export default FullColumn;