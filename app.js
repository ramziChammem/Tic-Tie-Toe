console.log("helelews");

var play1 = document.getElementById("play1");
var play2 = document.getElementById("play2");
var play3 = document.getElementById("play3");
var play4 = document.getElementById("play4");
var play5 = document.getElementById("play5");
var play6 = document.getElementById("play6");
var play7 = document.getElementById("play7");
var play8 = document.getElementById("play8");
var play9 = document.getElementById("play9");
var plays = [play1, play2, play3, play4, play5, play6, play7, play8, play9];

var counter = 0;
var checker = false;
var checkWinner = function (plays) {
  if (
    play1.innerHTML === play2.innerHTML &&
    play2.innerHTML === play3.innerHTML &&
    play3.innerHTML === "X"
  ) {
    console.log("Player One Wins!");
    checker = true;
  } else if (
    play1.innerHTML === play2.innerHTML &&
    play2.innerHTML === play3.innerHTML &&
    play3.innerHTML === "O"
  ) {
    checker = true;
    console.log("player Two Wins!");
  } else if (
    play1.innerHTML === play4.innerHTML &&
    play4.innerHTML === play7.innerHTML &&
    play7.innerHTML === "X"
  ) {
    checker = true;
    console.log("Player One Wins!");
  } else if (
    play1.innerHTML === play4.innerHTML &&
    play4.innerHTML === play7.innerHTML &&
    play7.innerHTML === "O"
  ) {
    checker = true;
    console.log("Player Two Wins!");
  } else if (
    play2.innerHTML === play5.innerHTML &&
    play5.innerHTML === play8.innerHTML &&
    play8.innerHTML === "X"
  ) {
    checker = true;
    console.log("Player One Wins!");
  } else if (
    play2.innerHTML === play5.innerHTML &&
    play5.innerHTML === play8.innerHTML &&
    play8.innerHTML === "O"
  ) {
    checker = true;
    console.log("Player One Wins!");
  } else if (
    play3.innerHTML === play6.innerHTML &&
    play6.innerHTML === play9.innerHTML &&
    play9.innerHTML === "X"
  ) {
    checker = true;
    console.log("Player Two Wins!");
  } else if (
    play3.innerHTML === play6.innerHTML &&
    play6.innerHTML === play9.innerHTML &&
    play9.innerHTML === "O"
  ) {
    checker = true;
    console.log("Player Two Wins!");
  } else if (
    play4.innerHTML === play5.innerHTML &&
    play5.innerHTML === play6.innerHTML &&
    play6.innerHTML === "X"
  ) {
    checker = true;
    console.log("Player One Wins!");
  } else if (
    play4.innerHTML === play5.innerHTML &&
    play5.innerHTML === play6.innerHTML &&
    play6.innerHTML === "O"
  ) {
    checker = true;
    console.log("Player Two Wins!");
  } else if (
    play7.innerHTML === play8.innerHTML &&
    play8.innerHTML === play9.innerHTML &&
    play9.innerHTML === "X"
  ) {
    checker = true;
    console.log("Player One Wins!");
  } else if (
    play7.innerHTML === play8.innerHTML &&
    play8.innerHTML === play9.innerHTML &&
    play9.innerHTML === "O"
  ) {
    checker = true;
    console.log("Player Two Wins!");
  } else if (
    play1.innerHTML === play5.innerHTML &&
    play5.innerHTML === play9.innerHTML &&
    play9.innerHTML === "X"
  ) {
    checker = true;
    console.log("Player One Wins!");
  } else if (
    play1.innerHTML === play5.innerHTML &&
    play5.innerHTML === play9.innerHTML &&
    play9.innerHTML === "O"
  ) {
    checker = true;
    console.log("Player Two Wins!");
  } else if (
    play3.innerHTML === play5.innerHTML &&
    play5.innerHTML === play7.innerHTML &&
    play7.innerHTML === "X"
  ) {
    checker = true;
    console.log("Player One Wins!");
  } else if (
    play3.innerHTML === play5.innerHTML &&
    play5.innerHTML === play7.innerHTML &&
    play7.innerHTML === "O"
  ) {
    checker = true;
    console.log("Player Two Wins!");
  }
};

var checkPlays = function () {
  plays.forEach((element) => {
    element.addEventListener("click", (element) => {
      console.log(element.target);
      if (element.target.innerHTML === "" && counter % 2 === 0) {
        element.target.innerHTML = "X";
        counter++;
        checkWinner();
      } else if (element.target.innerHTML === "" && counter % 2 === 1) {
        element.target.innerHTML = "O";
        counter++;
        checkWinner();
      }
    });
  });
  
};

checkPlays();
// checkWinner();
