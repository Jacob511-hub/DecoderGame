import React from "react";
import ScoreLight from "./ScoreLight";

interface ScoreProps {
    result: ("green" | "yellow" | "red" | "black")[];
}

const Score: React.FC<ScoreProps> = ({ result }) => {
    return (
        <div className="score">
            {result.map((color, i) => (
                <ScoreLight key={i} color={color} />
            ))}
        </div>
    );
};

export default Score;