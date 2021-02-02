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
var emptyAll = function () {
  play1.innerHTML = "";
  play2.innerHTML = "";
  play3.innerHTML = "";
  play4.innerHTML = "";
  play5.innerHTML = "";
  play6.innerHTML = "";
  play7.innerHTML = "";
  play8.innerHTML = "";
  play9.innerHTML = "";
  var div = document.getElementsByTagName("div");
  var btn = document.getElementsByTagName("button");
  div[0].remove();
  btn[0].remove();
};
var checkWinner = function (plays) {
  if (
    play1.innerHTML === play2.innerHTML &&
    play2.innerHTML === play3.innerHTML &&
    play3.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play1.innerHTML === play2.innerHTML &&
    play2.innerHTML === play3.innerHTML &&
    play3.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play1.innerHTML === play4.innerHTML &&
    play4.innerHTML === play7.innerHTML &&
    play7.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play1.innerHTML === play4.innerHTML &&
    play4.innerHTML === play7.innerHTML &&
    play7.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play2.innerHTML === play5.innerHTML &&
    play5.innerHTML === play8.innerHTML &&
    play8.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play2.innerHTML === play5.innerHTML &&
    play5.innerHTML === play8.innerHTML &&
    play8.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play3.innerHTML === play6.innerHTML &&
    play6.innerHTML === play9.innerHTML &&
    play9.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play3.innerHTML === play6.innerHTML &&
    play6.innerHTML === play9.innerHTML &&
    play9.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play4.innerHTML === play5.innerHTML &&
    play5.innerHTML === play6.innerHTML &&
    play6.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play4.innerHTML === play5.innerHTML &&
    play5.innerHTML === play6.innerHTML &&
    play6.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play7.innerHTML === play8.innerHTML &&
    play8.innerHTML === play9.innerHTML &&
    play9.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play7.innerHTML === play8.innerHTML &&
    play8.innerHTML === play9.innerHTML &&
    play9.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play1.innerHTML === play5.innerHTML &&
    play5.innerHTML === play9.innerHTML &&
    play9.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play1.innerHTML === play5.innerHTML &&
    play5.innerHTML === play9.innerHTML &&
    play9.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play3.innerHTML === play5.innerHTML &&
    play5.innerHTML === play7.innerHTML &&
    play7.innerHTML === "X"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player One Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play3.innerHTML === play5.innerHTML &&
    play5.innerHTML === play7.innerHTML &&
    play7.innerHTML === "O"
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Player Two Wins!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
  } else if (
    play1.innerHTML !== "" &&
    play2.innerHTML !== "" &&
    play3.innerHTML !== "" &&
    play4.innerHTML !== "" &&
    play5.innerHTML !== "" &&
    play6.innerHTML !== "" &&
    play7.innerHTML !== "" &&
    play8.innerHTML !== "" &&
    play9.innerHTML !== ""
  ) {
    var winner = document.createElement("div");
    winner.innerHTML = "Ow We Have a Tie Here!";
    document.body.appendChild(winner);
    var btn = document.createElement("button");
    btn.innerHTML = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", emptyAll);
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

// var btn = document.createElement("button");
// btn.innerHTML = "Play Again";
// document.body.appendChild(btn);
// btn.addEventListener("click", () => {
//   document.getElementsById("play1").innerHTML = "";
//   document.getElementsById("play2").innerHTML = "";
//   document.getElementsById("play3").innerHTML = "";
//   document.getElementsById("play4").innerHTML = "";
//   document.getElementsById("play5").innerHTML = "";
//   document.getElementsById("play6").innerHTML = "";
//   document.getElementsById("play7").innerHTML = "";
//   document.getElementsById("play8").innerHTML = "";
//   document.getElementsById("play9").innerHTML = "";
// });

checkPlays();
