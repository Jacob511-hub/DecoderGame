import React from "react";

interface StartButtonProps {
    text: string;
    onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ text, onClick }) => {
    return (
        <button className="start-game-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default StartButton;