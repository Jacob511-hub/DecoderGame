import React from "react";

const ScoreLight: React.FC = () => {
    return (
        <div className="score-light">
            <div
                style={{
                    backgroundImage: "url(/images/ScoreBlack.png)",
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover'
                }}>
            </div>
        </div>
    )
};

export default ScoreLight;