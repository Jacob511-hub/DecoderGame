import React from "react";

interface ScoreLightProps {
    color: "green" | "yellow" | "red" | "black";
}

const colorToImage: Record<ScoreLightProps["color"], string> = {
    green: "url(/images/ScoreGreen.png)",
    yellow: "url(/images/ScoreYellow.png)",
    red: "url(/images/ScoreRed.png)",
    black: "url(/images/ScoreBlack.png)",
};

const ScoreLight: React.FC<ScoreLightProps> = ({ color }) => {
    return (
        <div className="score-light">
            <div
                style={{
                    backgroundImage: colorToImage[color],
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
};

export default ScoreLight;