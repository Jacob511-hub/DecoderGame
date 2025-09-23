# Decoder Game :question:

This is a browser game where players must decipher a solution in a limited number of guesses in order to win.

**TRY IT OUT HERE: [GitHub Pages](https://jacob511-hub.github.io/DecoderGame/)**

## Description

- This is a webpage designed to allow users to play a simple game where the objective is to, within 8 or fewer guesses, decipher a random combination of 4 inputs.
- Users are told after each guess how many of their inputs were correct or in the wrong position, and using this information, they must narrow down the possible combinations of inputs in order to find the correct combination before they run out of guesses.

![DecoderGameProjectPhoto1]()

## Usage

- To start the game, press the light blue play button in the corner of the board. Pressing it will start the game and turn the button into a pink restart button. This button can be pressed to restart the game from the beginning.
- Upon starting the game, the first of the eight guessing sections will become highlighted. The first circle in this section should be selected by default, indicated by a pink border.
- One of the 6 possible inputs can be selected to place that input in the selected circle. Doing so will automatically highlight the next circle for input selection. The user can also manually choose any of the 4 circles for inputs in any order.
- Upon selecting an input for all 4 circles, the checkmark button can be pressed to confirm your guess. The four smaller circles will light up either pink or light blue to indicate how many of your 4 inputs were correct. A light blue circle indicates that one of your inputs was the correct color in the correct spot. A pink circle indicates that your guess contains a color that is in the solution, but was not in the correct spot. The order of these score lights is not reflective of the order of the guessed inputs, so you cannot tell which inputs the individual scores are attributed to.
- This process repeats until you either use up all 8 of your guesses or you guess the entire answer correctly, after which the answer is then revealed.

![DecoderGameProjectPhoto2]()

## Source Code

- Source code can be found on [GitHub](https://github.com/Jacob511-hub/DecoderGame)

## Tech Stack

- This webpage was created using React, TypeScript, and CSS.