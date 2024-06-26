let randomNum = parseInt(Math.random() * 100 + 1)
// console.log(randomNum);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const lowOrHi = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const guessSlot = document.querySelector('.guesses')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);

    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter the valid number !!");
    }
    else if (guess < 1) {
        alert("Please enter the grather then 0 number !!");
    }
    else if (guess > 100) {
        alert("Please enter the less then 100 number !!");
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            dispalyMessage(`Game was over and Random number was ${randomNum}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkguess(guess);
        }
    }
}



function checkguess(guess) {
    if (randomNum === guess) {
        dispalyMessage(`You gessed it right`)
        endGame();
    }
    else if (guess > randomNum) {
        dispalyMessage(`The guess is Too High`)

    }
    else if (guess < randomNum) {
        dispalyMessage(`The guess is Too Low`)

    }
}

function displayGuess(guess) {

    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++ ;
    remaining.innerHTML = `${11-numGuess}`

}
function dispalyMessage(message) {
lowOrHi.innerHTML = ` <h2>${message}</h2>`
}


function endGame() {
userInput.value = ''
userInput.setAttribute('disabled' , '')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener( 'click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        lowOrHi.innerHTML=''
        startOver.removeChild(p);
        dispalyMessage.innerHTML = ''
        playGame = true;

    });

}
