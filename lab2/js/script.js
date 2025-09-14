

document.querySelector("#guessBtn").addEventListener("click",guess);
let win = Math.floor(Math.random()*99)+1;

function guess(){
    let userGuess = document.querySelector("#guessBox").value;
    document.querySelector("#prevGs").textContent +=`${userGuess} `;
    if(userGuess == win){
        document.querySelector("#Results").textContent +=`${userGuess} `;
    }
}
