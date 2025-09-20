document.querySelector("#guessBtn").addEventListener("click", guess);
let correctGuess = Math.floor(Math.random()*99+1);
let numofguess = 7;
let gameOver = false;

function guess(){
    if (gameOver){
        return;
    }
    let userGuess = document.querySelector("#guessBox").value;
    document.querySelector("#answers").textContent += `${userGuess} `;

    checkGuess();
    numofguess--;

    if (userGuess == correctGuess){
        document.querySelector("#yourGuess").textContent = "Congrats, your guess was correct!";
        document.querySelector("#yourGuess").style.color = "#158d00ff";
        gameOver = true;
        return;
    }
    if(numofguess <= 0){
        document.querySelector("#yourGuess").textContent = `You lose! The number was ${correctGuess}`;
        document.querySelector("#yourGuess").style.color = "red";
        gameOver = true;
        return;
    }
    if(userGuess > correctGuess){
        document.querySelector("#yourGuess").textContent = `Too high! ${numofguess} guesses left`;
        document.querySelector("#yourGuess").style.color = "purple";
    } else {
        document.querySelector("#yourGuess").textContent = `Too low! ${numofguess} guesses left`;
        document.querySelector("#yourGuess").style.color = "blue";
    }
}
function checkGuess(){
    let guess = document.querySelector("#guessBox").value;
    console.log("player guess: "+ guess);
    if( guess < 1 || guess > 99){
        alert("guess out of range 1-99");
        return;
    }
}