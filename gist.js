let boxes = document.body.querySelectorAll(".box");

let player1 = "me";
let player2 = "other";

let turn = player1;

const winCases = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [2, 5, 7],
];

const player1Moves = [];
const player2Moves = [];
const playground = document.body.querySelector(".playground");

const GameOverScreen = document.createElement("div");
GameOverScreen.innerHTML = "Game Over";
GameOverScreen.classList.add("gameOver");

console.log(GameOverScreen);

let GameOver = false;

boxes.forEach((box) => {
  const handleGamePlay = (e) => {
    if (turn === player1) {
      e.target.classList.add("circle");
      turn = player2;
      player1Moves.push(Number(e.target.id));
      player1Moves.sort((a, b) => a - b);
    } else if (turn === player2) {
      e.target.classList.add("cross");
      turn = player1;
      player2Moves.push(Number(e.target.id));
      player2Moves.sort((a, b) => a - b);
    }
    if (
      checkCases(player1Moves, winCases) ||
      checkCases(player2Moves, winCases)
    ) {
      console.log("Game is over");
      console.log(GameOverScreen);
      playground.appendChild(GameOverScreen);
    }
  };

  box.addEventListener("click", handleGamePlay, { once: true });
});

// trigger while when click
//
//

const checkCases = (testCase, winCases) => {
  let val = false;
  winCases.forEach((element) => {
    if (!val) {
      val =
        element[0] === testCase[0] &&
        element[1] === testCase[1] &&
        element[2] === testCase[2];
    }
  });
  return val;
};

// document.body.addEventListener("click", () => {
//   if (
//     checkCases(player1Moves, winCases) ||
//     checkCases(player2Moves, winCases)
//   ) {
//     document.body.removeEventListener("click", () => {});
//   }
// });
