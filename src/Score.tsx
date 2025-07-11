import React from "react";
import ScoreLight from "./ScoreLight";

const Score: React.FC = () => {
    return (
        <div className="score">
            <ScoreLight />
            <ScoreLight />
            <ScoreLight />
            <ScoreLight />
        </div>
    )
};

export default Score;