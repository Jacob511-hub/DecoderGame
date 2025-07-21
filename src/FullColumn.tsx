import React, { useState, useRef } from "react";
import Score from "./Score";
import GuessColumn from "./GuessColumn";
import ConfirmButton from "./ConfirmButton";
import { useAnswerArray } from "./AnswerArrayContext";
import { checkGuess } from "./utils/checkGuess";

const FullColumn: React.FC = () => {
    const [guess, setGuess] = useState<(number | null)[]>([null, null, null, null]);
    const [scoreResult, setScoreResult] = useState<("green" | "yellow" | "red" | "black")[]>(["black", "black", "black", "black"]);
    const colorSetterRef = useRef<((colorId: number) => void) | null>(null);

    const { AnswerArray, setRevealAnswer } = useAnswerArray();

    const handleConfirm = () => {
        if (guess.includes(null)) return;
        const filteredGuess = guess as number[];
        const result = checkGuess(filteredGuess, AnswerArray);
        setScoreResult(result);

        if (result.every((color) => color === "green")) {
            setRevealAnswer(true);
        }
    };

    return (
        <div className="full-column">
            <Score result={scoreResult} />
            <GuessColumn
                onGuessChange={setGuess}
                registerColorSetter={(setter) => (colorSetterRef.current = setter)}
            />
            <ConfirmButton onClick={handleConfirm} />
        </div>
    );
};

export default FullColumn;