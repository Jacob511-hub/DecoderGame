import React from "react";
import Score from "./Score";
import GuessColumn from "./GuessColumn";
import ConfirmButton from "./ConfirmButton";

const FullColumn: React.FC = () => {
    return (
        <div className="full-column">
            <Score />
            <GuessColumn />
            <ConfirmButton />
        </div>
    )
};

export default FullColumn;