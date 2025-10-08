import React, { useState, useEffect, useRef } from "react";
import OptionsColumn from "./OptionsColumn";
import FullColumn from "./FullColumn";
import AnswerColumn from "./AnswerColumn";
import { OptionsContext, SetColorFunction } from "./OptionsContext";

interface BoardProps {
  gameStarted: boolean;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  resetCounter: number;
}

const Board: React.FC<BoardProps> = ({
    gameStarted,
    gameOver,
    setGameOver,
    resetCounter,
}) => {
    const [activeColumn, setActiveColumn] = useState(0);
    const currentSetterRef = useRef<SetColorFunction | null>(null);

    const handleOptionClickSetter = (setter: SetColorFunction) => {
        currentSetterRef.current = setter;
    };

    const triggerColorSelect = (colorId: number) => {
        currentSetterRef.current?.(colorId);
    };

    useEffect(() => {
        setActiveColumn(0);
    }, [resetCounter, gameStarted]);

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
                        resetTrigger={resetCounter}
                        isActive={i === activeColumn && gameStarted && !gameOver}
                        isLockedIn={i < (activeColumn ?? 0) || (i === activeColumn && gameOver)}
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