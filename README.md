# javascript-browser-game-tic-tac-toe-lab
1) Define the required variables used to track the state of the game.
board: An array representing the 9 squares, storing 0 (empty), 1 (X), or -1 (O).
turn: A number (1 or -1) indicating whose turn it is.
winner: null (no winner yet), 1 (X wins), -1 (O wins), or 'T' (tie).

2) Store cached element references.
squareEls: NodeList of all the square div elements.
messageEl: The h2 element for displaying messages.
resetBtnEl: The reset button element.

3) Upon loading, the game state should be initialized, and a function should
be called to render this game state.
init() function:
Set board to [0, 0, 0, 0, 0, 0, 0, 0, 0]
Set turn to 1 (X starts)
Set winner to null
Call render()

4) The state of the game should be rendered to the user.
render() function:
Iterate through the board array:
For each square, update its text content based on board value (X, O, or empty).
Update the message element:
If winner is 'T', display "It's a Cat's Game!"
If winner is 1 or -1, display "X Wins!" or "O Wins!"
Else (no winner yet), display "It's X's Turn" or "It's O's Turn"

5) Define the required constants.
PLAYERS: An object mapping 1 to 'X' and -1 to 'O'.
WIN_COMBOS: An array of arrays, each sub-array representing a winning combination of board indices.

6) Handle a player clicking a square with a `handleClick` function.
handleClick(event) function:
Get the ID of the clicked square (its index in the board array).
Convert the ID to a number.

Check if the clicked square is already occupied (board[idx] is not 0).
If yes, return immediately (do nothing).
Check if there is already a winner (winner is not null).
If yes, return immediately (do nothing).

Update the board array at the clicked index with the current player's turn value.
Change the turn to the other player (multiply turn by -1).

Call checkWinner() to determine if there's a winner or a tie.
Call render() to update the UI with the new game state.

7) Create Reset functionality.
Attach event listeners:
For each square element:
Add a 'click' event listener that calls handleClick.
For the reset button element:
Add a 'click' event listener that calls init.

checkWinner() function:
Initialize winner to null.
Iterate through each WIN_COMBO:
Get the values from the board at the indices specified by the current WIN_COMBO.
Calculate the sum of these three values.
If the sum is 3 (1 + 1 + 1), set winner to 1 (X wins).
If the sum is -3 (-1 + -1 + -1), set winner to -1 (O wins).
If a winner is found, break out of the loop.

If no winner is found after checking all combinations:
Check if there are any 0s left on the board (meaning empty squares).
If there are no 0s, and no winner, set winner to 'T' (tie game).
