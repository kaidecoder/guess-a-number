let p = document.querySelector("p");
const alertBox = document.querySelector(".alert-box");

let text;
let yourNumber;
let computerGuess;



let endOfFile = false;
function guessANumber() {
  // let newPromise = new Promise((resolve, reject) => {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
    while (!endOfFile) {
      // NOTE: NEED TO GENERATE A NEW NUMBER
      yourNumber = Number(prompt("Please enter a number:  "));
      if (yourNumber > computerGuess) {
        console.log(yourNumber, "too large");
        alertBox.classList.add("warning")
        text = `${yourNumber} too large`;
        // setTimeout(() => resolve("too large!"), 800)
        //  setTimeout(() => reject("too slow"), 1000)
        // resolve(text)
        p.innerText += text;
      } else if (yourNumber < computerGuess) {
        console.log(yourNumber, "too small");
        alertBox.classList.add("error")
        text = `${yourNumber} too small`;
        // resolve(text)
        // setTimeout(() => resolve("too small"), 2000)
        p.innerText += text;
      } else {
        alertBox.classList.add("success");
        text = `${yourNumber} SUCCESS`;
        // resolve(text)
        p.innerText += text;
        console.log(yourNumber, "success");
        //  setTimeout(() => resolve("SUCCESS"), 1000)
        let play = prompt("Would you like to play again? ");
        if (play !== "yes") {
          break;
        }

        continue;
      }

      continue;
    }
  // });
  // let result = await newPromise;
  // setTimeout(() => p.innerText =`${result}`, 6000)
  // p.innerText = result; 
  // console.log("hello", result);
}

