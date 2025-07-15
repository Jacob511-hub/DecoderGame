import React from "react";

const CodeInput: React.FC<{ src: string; }> = ({ src }) => {
    return (
        <div className="code-input">
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