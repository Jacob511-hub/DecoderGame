import React from "react";

interface ConfirmButtonProps {
    onClick: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick }) => {
    return (
        <div className="code-input" onClick={onClick}>
            <div
                style={{
                    backgroundImage: "url(/images/Confirm.png)",
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover'
                }}>
            </div>
        </div>
    )
};

export default ConfirmButton;