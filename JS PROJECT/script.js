"strick mode";
let number = Number(Math.trunc(Math.random() * 20) + 1); //improve
console.log(number);
let i = 0;
let score = 0;
highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  //console.log(guess);
  i++;
  console.log(i);
  if (i < 6) {
    score = 120 - 20 * i;
    if (guess == number) {
      console.log(i);
      document.querySelector(".message").textContent = "You Won!";
      document.querySelector(".number").textContent = number;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".score").textContent = score;
      if (score > highScore) {
        document.querySelector(".highscore").textContent = score;
      }
    }
    if (guess > number) {
      document.querySelector(".message").textContent = "Too High!";
      document.querySelector(".score").textContent = score;
    }
    if (guess < number) {
      document.querySelector(".message").textContent = "Too Low!";
      document.querySelector(".score").textContent = score;
    }
  } else if (i >= 6) {
    document.querySelector(".message").textContent = "You Loose!";
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".score").textContent = "0";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 0;
  i = 0;
  number = Number(Math.trunc(Math.random() * 20)) + 1;

  console.log(`new high ${number}`);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  //   document.querySelector(".number").style.width = "12rem";
});
// "use strict";

// let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);

// let score = 20;
// let highScore = 0;
// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector(".message").textContent = " No Number!";
//   } else if (guess === number) {
//     document.querySelector(".message").textContent = " Correct Number!";
//     // document.querySelector('.body').style.backgroundColor = '#60b347';
//     // document.querySelector('.number').style.width = '30rem';
//     document.querySelector(".number").textContent = number;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     }
//   } else if (guess > number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too High!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You Lose The Game!";
//     }
//   } else if (guess < number) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You Lose The Game!";
//     }
//   }
// });
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   let number = Math.trunc(Math.random() * 20) + 1;
//   console.log(number);
//   document.querySelector(".message").textContent = "Start Guessing...";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });
