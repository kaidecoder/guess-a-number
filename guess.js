const p= document.querySelector("p")
const alertBox = document.querySelector(".alert-box")

p.innerText = "Welcome to The Guessing Game"
let yourNumber
let computerGuess

computerGuess = Math.floor(Math.random() * 100 + 1)
console.log(computerGuess)
while (yourNumber == null || yourNumber == "") {
    yourNumber = Number(
      prompt(
        "Please enter a number:  ",
      ),
    );
    continue;
    
  }
  
if(yourNumber > computerGuess){
    alertBox.classList.add("error")
    p.innerText = "Your number is too large"
}else if(yourNumber < computerGuess){
    alertBox.classList.add("warning")
    p.innerText = "Your number is too small"
}else{
    alertBox.classList.add("success")
    p.innerText = "SUCCESS"
}
