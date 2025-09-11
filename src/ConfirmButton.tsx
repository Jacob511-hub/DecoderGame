import React from "react";

interface ConfirmButtonProps {
    onClick: () => void;
    disabled?: boolean;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick, disabled }) => {
    return (
        <div className="code-input">
            <div
                onClick={!disabled ? onClick : undefined}
                style={{
                    backgroundImage: "url(./images/Confirm.png)",
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    opacity: disabled ? 0.4 : 1,
                    pointerEvents: disabled ? "none" : "auto",
                    cursor: disabled ? "default" : "pointer",
                }}>
            </div>
        </div>
    )
};

export default ConfirmButton;