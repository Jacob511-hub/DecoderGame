import React, { useState, useRef } from "react";
import OptionsColumn from "./OptionsColumn";
import FullColumn from "./FullColumn";
import AnswerColumn from "./AnswerColumn";
import { useAnswerArray } from "./AnswerArrayContext";
import { OptionsContext, SetColorFunction } from "./OptionsContext";

const Board: React.FC = () => {
    const { AnswerArray } = useAnswerArray();
    const [activeColumn, setActiveColumn] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    console.log(AnswerArray);

    const currentSetterRef = useRef<SetColorFunction | null>(null);

    const handleOptionClickSetter = (setter: SetColorFunction) => {
        currentSetterRef.current = setter;
    };

    const triggerColorSelect = (colorId: number) => {
        currentSetterRef.current?.(colorId);
    };

    return (
        <OptionsContext.Provider
            value={{
                onOptionClick: handleOptionClickSetter,
                triggerColorSelect,
            }}
        >
            <div className="board">
                <OptionsColumn />
                {[...Array(8)].map((_, i) => (
                    <FullColumn
                        key={i}
                        index={i}
                        isActive={i === activeColumn && !gameOver}
                        isLockedIn={i < activeColumn || (i === activeColumn && gameOver)}
                        onGuessConfirmed={(wasCorrect) => {
                            if (wasCorrect) {
                                setGameOver(true);
                            } else {
                                setActiveColumn((prev) => prev + 1);
                            }
                        }}
                    />
                ))}
                <AnswerColumn />
            </div>
        </OptionsContext.Provider>
    );
};

export default Board;