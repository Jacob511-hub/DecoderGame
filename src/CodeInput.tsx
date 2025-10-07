import React from "react";

interface CodeInputProps {
    src: string;
    onClick?: () => void;
    isSelected?: boolean;
    draggable?: boolean;
    onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({
    src,
    onClick,
    isSelected,
    draggable,
    onDragStart,
    onDragOver,
    onDrop,
}) => {
    return (
        <div
            className={`code-input ${isSelected ? "selected" : ""}`}
            onClick={onClick}
            draggable={draggable}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
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