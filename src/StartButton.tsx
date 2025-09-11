import React from "react";

interface StartButtonProps {
    text: "Start" | "Restart";
    onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ text, onClick }) => {
    const imageMap: Record<string, string> = {
        Start: "url(./images/Start.png)",
        Restart: "url(./images/Restart.png)",
    };

    return (
        <div className="start-game-button" onClick={onClick}>
            <div
                style={{
                    backgroundImage: imageMap[text],
                    width: "100%",
                    height: '100%',
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
};

export default StartButton;