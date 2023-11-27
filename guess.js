const p = document.querySelector("p");
const alertBox = document.querySelector(".alert-box");
let text
let yourNumber;
let computerGuess
computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
let endOfFile = false;
async function guessANumber(){
  while (!endOfFile) {
    // NOTE: NEED TO GENERATE A NEW NUMBER
  yourNumber = Number(prompt("Please enter a number:  "));
  if (yourNumber > computerGuess) {
    console.log("too large");
    text = "too large"
  } else if (yourNumber < computerGuess) {
    console.log("too small");
    text = "too small"
  } else {
    alertBox.classList.add("success");
    text = "SUCCESS";
    // console.log("success");
    let play = prompt("Would you like to play again? ")
  if(play !== "yes"){

    break
  }
  
  continue
  }
  
  continue;
}
}


const myPromise = new Promise((resolve, reject)=>{
  if(guessANumber){
    resolve('There is a value')
  }else{
    reject("there is no number")
  }
})
myPromise.then(text)



