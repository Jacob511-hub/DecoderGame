import React from "react";
import CodeInput from "./CodeInput";
import { useAnswerArray } from "./AnswerArrayContext";

const COLOR_IMAGES = [
    `url(${process.env.PUBLIC_URL}/images/CodeRed.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeBlue.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeYellow.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeGreen.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodeOrange.png)`,
    `url(${process.env.PUBLIC_URL}/images/CodePurple.png)`,
  ];

const AnswerColumn: React.FC = () => {
    const { AnswerArray, revealAnswer } = useAnswerArray();
  
    const images = revealAnswer
      ? AnswerArray.map((id) => COLOR_IMAGES[id])
      : Array(4).fill(`url(${process.env.PUBLIC_URL}/images/CodeBlack.png)`);
  
      return (
        <div className="answer-column">
            {images.map((src, i) => (
                <CodeInput key={i} src={src} />
            ))}
        </div>
      );
};

export default AnswerColumn;