export function checkGuess(guess: number[], answer: number[]): ("green" | "yellow" | "red")[] {
    const result: ("green" | "yellow" | "red")[] = Array(4).fill("red");
    const guessUsed = Array(4).fill(false);
    const answerUsed = Array(4).fill(false);

    for (let i = 0; i < 4; i++) {
        if (guess[i] === answer[i]) {
            result[i] = "green";
            guessUsed[i] = true;
            answerUsed[i] = true;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (result[i] === "green") continue;
        for (let j = 0; j < 4; j++) {
            if (!answerUsed[j] && guess[i] === answer[j]) {
                result[i] = "yellow";
                guessUsed[i] = true;
                answerUsed[j] = true;
                break;
            }
        }
    }

    return result;
}