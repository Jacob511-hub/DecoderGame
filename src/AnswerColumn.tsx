import React from "react";
import CodeInput from "./CodeInput";
import { useAnswerArray } from "./AnswerArrayContext";

const COLOR_IMAGES = [
    "url(/images/CodeRed.png)",
    "url(/images/CodeBlue.png)",
    "url(/images/CodeYellow.png)",
    "url(/images/CodeGreen.png)",
    "url(/images/CodeOrange.png)",
    "url(/images/CodePurple.png)",
  ];

const AnswerColumn: React.FC = () => {
    const { AnswerArray, revealAnswer } = useAnswerArray();
  
    const images = revealAnswer
      ? AnswerArray.map((id) => COLOR_IMAGES[id])
      : Array(4).fill("url(/images/CodeBlack.png)");
  
      return (
        <div className="answer-column">
            {images.map((src, i) => (
                <CodeInput key={i} src={src} />
            ))}
        </div>
      );
};

export default AnswerColumn;