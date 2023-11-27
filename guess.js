let p = document.querySelector("p");
const alertBox = document.querySelector(".alert-box");
let text;
let yourNumber;
let computerGuess;
computerGuess = Math.floor(Math.random() * 100 + 1);
console.log(computerGuess);

let endOfFile = false;
async function guessANumber() {
  let newPromise = new Promise((resolve, reject) => {
    while (!endOfFile) {
      // NOTE: NEED TO GENERATE A NEW NUMBER
      yourNumber = Number(prompt("Please enter a number:  "));
      if (yourNumber > computerGuess) {
        console.log("too large");
        text = "too large";
        setTimeout(() => resolve("too large!"), 1000)
         setTimeout(() => reject("too slow"), 1000)
        // resolve("too large")
        p.innerText = text;
      } else if (yourNumber < computerGuess) {
        console.log("too small");
        text = "too small";
        // resolve("too small")
        setTimeout(() => resolve("too small"), 1000)
        p.innerText = text;
      } else {
        alertBox.classList.add("success");
        text = "SUCCESS";
        // resolve("success")
        // p.innerText = text;
        // console.log("success");
         setTimeout(() => resolve("too small"), 1000)
        let play = prompt("Would you like to play again? ");
        if (play !== "yes") {
          break;
        }

        continue;
      }

      continue;
    }
  });
  let result = await newPromise;
  p.innerText = result;
  // consol?e.log(result);
}

// const myPromise = new Promise((resolve, reject)=>{
//   if(guessANumber){
//     resolve(p.innerText=text)
//   }else{
//     reject("there is no number")
//   }
// })
// myPromise.then(console.log('Done'))
