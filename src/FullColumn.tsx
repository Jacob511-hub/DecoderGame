import React from "react";
import Score from "./Score";
import GuessColumn from "./GuessColumn";

const FullColumn: React.FC = () => {
    return (
        <div className="full-column">
            <Score />
            <GuessColumn />
        </div>
    )
};

export default FullColumn;