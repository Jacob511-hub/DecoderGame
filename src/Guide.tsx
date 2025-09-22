import React from "react";

const Guide: React.FC = () => {
    return (
        <div className="guide">
            <div className="score-guide">
                <img
                    src={`${process.env.PUBLIC_URL}/images/ScoreGreen.png`}
                    style={{ height: "80%", marginRight: "10px" }}
                    alt=""
                />
                <span className="guide-text">
                    Correct color in correct position
                </span>
            </div>
            <div className="score-guide">
                <img
                    src={`${process.env.PUBLIC_URL}/images/ScoreYellow.png`}
                    style={{ height: "80%", marginRight: "10px" }}
                    alt=""
                />
                <span className="guide-text">
                    Correct color in wrong position
                </span>
            </div>
        </div>
    );
};

export default Guide;