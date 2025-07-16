import React, { useRef } from "react";
import OptionsColumn from "./OptionsColumn";
import FullColumn from "./FullColumn";
import AnswerColumn from "./AnswerColumn";
import { useAnswerArray } from "./AnswerArrayContext";
import { OptionsContext, SetColorFunction } from "./OptionsContext";

const Board: React.FC = () => {
    const { AnswerArray } = useAnswerArray();
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
                    <FullColumn key={i} />
                ))}
                <AnswerColumn />
            </div>
        </OptionsContext.Provider>
    );
};

export default Board;