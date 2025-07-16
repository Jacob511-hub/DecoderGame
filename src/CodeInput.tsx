import React from "react";

interface CodeInputProps {
    src: string;
    onClick?: () => void;
    isSelected?: boolean;
}

const CodeInput: React.FC<CodeInputProps> = ({ src, onClick, isSelected }) => {
    return (
        <div className={`code-input ${isSelected ? "selected" : ""}`} onClick={onClick}>
            <div
                style={{
                    backgroundImage: src,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover'
                }}>
            </div>
        </div>
    )
};

export default CodeInput;