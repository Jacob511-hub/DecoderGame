export function checkGuess(guess: number[], answer: number[]): ("green" | "yellow" | "red")[] {
    const result: ("green" | "yellow" | "red")[] = Array(4).fill("red");
    const guessUsed = Array(4).fill(false);
    const answerUsed = Array(4).fill(false);

    let greenCount = 0;
    let yellowCount = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === answer[i]) {
            greenCount++;
            guessUsed[i] = true;
            answerUsed[i] = true;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (guessUsed[i]) continue;

        for (let j = 0; j < 4; j++) {
            if (!answerUsed[j] && guess[i] === answer[j]) {
                yellowCount++;
                guessUsed[i] = true;
                answerUsed[j] = true;
                break;
            }
        }
    }

    let redCount = 4 - greenCount - yellowCount;

    return [
        ...Array(greenCount).fill("green"),
        ...Array(yellowCount).fill("yellow"),
        ...Array(redCount).fill("red"),
    ];
}