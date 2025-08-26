import React from "react";

const Guide: React.FC = () => {
    return (
        <div className="guide">
            <div className="score-guide">
                <img
                    src="/images/ScoreGreen.png"
                    style={{ height: "80%", marginRight: "10px" }}
                />
                <span style={{ color: "white", fontSize: "1.4em" }}>
                    Correct color in correct position
                </span>
            </div>
            <div className="score-guide">
                <img
                    src="/images/ScoreYellow.png"
                    style={{ height: "80%", marginRight: "10px" }}
                />
                <span style={{ color: "white", fontSize: "1.4em" }}>
                    Correct color in wrong position
                </span>
            </div>
        </div>
    );
};

export default Guide;