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

    const glowColor =
        text === "Start" ? "rgba(32, 207, 255, 0.7)" : "rgba(248, 143, 229, 0.7)";

    return (
        <div className="start-game-button" onClick={onClick}>
            <div
                style={{
                    backgroundImage: imageMap[text],
                    width: "100%",
                    height: '100%',
                    backgroundSize: "cover",
                    transition: "filter 0.25s ease",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.filter =
                        `drop-shadow(0 0 10px ${glowColor}) drop-shadow(0 0 20px ${glowColor})`;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.filter = "";
                }}
            />
        </div>
    );
};

export default StartButton;