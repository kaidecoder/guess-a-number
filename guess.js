const p = document.querySelector("p");
const alertBox = document.querySelector(".alert-box");

let yourNumber;
let computerGuess = Math.floor(Math.random() * 100 + 1);
console.log(computerGuess);

let endOfFile = false;

while (!endOfFile) {
  yourNumber = Number(prompt("Please enter a number:  "));
  if (yourNumber > computerGuess) {
    alertBox.classList.add("error");
    p.innerText = "Your number is too large";
    console.log("too large");
  } else if (yourNumber < computerGuess) {
    alertBox.classList.add("warning");
    p.innerText = "Your number is too small";
    console.log("too small");
  } else {
    alertBox.classList.add("success");
    p.innerText = "SUCCESS";
    console.log("success");
    let play = prompt("Would you like to play again? ")
  if(play !== "yes"){
    break
  }
  continue
  }
  
  continue;
}
