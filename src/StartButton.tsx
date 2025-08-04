import React from "react";

const StartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button className="start-game-button" onClick={onClick}>
            Start
        </button>
    );
};

export default StartButton;