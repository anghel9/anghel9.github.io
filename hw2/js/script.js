let balance = 100;
const symbols = ['cherry.png', 'bar.png', 'fist.png'];
document.querySelector('#spinBtn').addEventListener('click', spin);
function spin() {
    const betAmount = parseInt(document.querySelector('#betAmount').value);
    
    if (betAmount > balance) {
        alert('Not enough money! Womp Womp');
        return;
    }

    balance -= betAmount;
    updateBalance();
    
    const reel1Symbol = getRandomSymbol();
    const reel2Symbol = getRandomSymbol();
    const reel3Symbol = getRandomSymbol();
    
    document.querySelector('#reel1').src = 'img/' + reel1Symbol;
    document.querySelector('#reel2').src = 'img/' + reel2Symbol;
    document.querySelector('#reel3').src = 'img/' + reel3Symbol;
    
    checkWin(reel1Symbol, reel2Symbol, reel3Symbol, betAmount);
}
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
function checkWin(symbol1, symbol2, symbol3, betAmount) {
    let winAmount = 0;
    let message = '';
    
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        if (symbol1 === 'fist.png') {
            winAmount = betAmount * 11;
            message = 'JACKPOT! Free Palestine! Won $' + winAmount;
        } else if (symbol1 === 'cherry.png') {
            winAmount = betAmount * 7;
            message = 'Three Cherries! Won $' + winAmount;
        } else {
            winAmount = betAmount * 4;
            message = 'Three Bars! Won $' + winAmount;
        }
    }
    else if (symbol1 === symbol2 || symbol2 === symbol3 || symbol1 === symbol3) {
        winAmount = betAmount * 1.5;
        message = 'Two Match! Won $' + winAmount;
    }
    else {
        message = 'No match. Lost $' + betAmount;
    }
    balance += winAmount;
    updateBalance();
    
    document.querySelector('#result').textContent = message;
    
    if (balance === 0) {
        alert('Game Over! Starting fresh with $100');
        balance = 100;
        updateBalance();
    }
}
function updateBalance() {
    document.querySelector('#balance').textContent = 'Balance: $' + balance;
}