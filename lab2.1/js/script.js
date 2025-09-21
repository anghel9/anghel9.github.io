document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);
let randomNumber;
let attempts;
let winz = 0;
let lossez = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

   document.querySelector("#guessBtn").style.display = "inline";
  
   //adding focus to textbox
   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();
   playerGuess.value = "";

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";
   document.querySelector("#guesses").textContent = "";
}

function checkGuess(){
    
    let guess = document.querySelector("#playerGuess").value;
    console.log("player guess: "+ guess);
    if( guess < 1 || guess > 99){
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    feedback.style.color = "orange";
    if ( guess == randomNumber ){
        feedback.textContent = "You Win";
        feedback.style.color = "darkgreen";
        winz++;
        document.querySelector("#winz").textContent = winz;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7 ){
            feedback.textContent = `You Lost, correct number ${randomNumber}`;
            feedback.style.color = "red";
            lossez++;
            document.querySelector("#lossez").textContent = lossez;
            gameOver();
        } else if ( guess > randomNumber) {
            feedback.textContent = `Guess too high! ${7-attempts} attempts left`;
        } else {
            feedback.textContent = `Guess too low ${7-attempts} attempts left`;
        }
    }
}
function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}