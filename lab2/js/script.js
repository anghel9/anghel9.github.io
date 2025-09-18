document.querySelector("#guessBtn").addEventListener("click", guess);
let correctGuess = Math.floor(Math.random()*99+1);
let numofguess = 7;

function guess(){
    
    let userGuess = document.querySelector("#guessBox").value;
    //alert(userGuess);
    document.querySelector("#answers").textContent += `${userGuess} `;
    if(numofguess > 0){
        if(userGuess>=100){
            alert("too big a guess");
        } 
        if (userGuess<=0){
            alert("too small a guess");
        }
        if (userGuess == correctGuess){
            document.querySelector("#yourGuess").textContent = "Congrats, your guess was correct";
            document.querySelector("#yourGuess").style.color = "#39FF14"
        }
        if(userGuess > correctGuess){
            document.querySelector("#yourGuess").textContent = "Your guess was too high";
            document.querySelector("#yourGuess").style.color = "yellow"
        }
        if(userGuess < correctGuess){
            document.querySelector("#yourGuess").textContent = "Your guess was too low";
            document.querySelector("#yourGuess").style.color = "yellow"
        }
    }
    if(numofguess <= 0){
       document.querySelector("#yourGuess").textContent = "You lose"
       document.querySelector("#yourGuess").style.color = "red"
       if(userGuess == correctGuess){
            document.querySelector("#yourGuess").textContent = "Correct you still lost";
            document.querySelector("#yourGuess").style.color = "red"
       }
    }
    numofguess--;
}