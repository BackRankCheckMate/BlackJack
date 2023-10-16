let cardsArray = [];
let sumCards = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
     name : "Player",
     chips : 145
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// The game starts
function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArray = [firstCard,secondCard];
    sumCards = firstCard + secondCard;
    renderGame();
}

// Getting new random card value
function getRandomCard() {
    let randomNumber =  Math.ceil(Math.random()*13);
    (randomNumber === 1 )? randomNumber= 11 : (randomNumber>10) ? randomNumber = 10 : randomNumber = randomNumber;
    return randomNumber;
}

// Rendering games
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cardsArray.length; i++) {
        cardsEl.textContent += cardsArray[i] + " ";
        
    }
    sumEl.textContent = "Sum: " + sumCards;
    if(sumCards < 21) {
        message = "Do you want to draw a new card?";
    } else if(sumCards == 21) {
        message = "You have Black Jack!";
        hasBlackJack = true;
    } else {
        message = "Damn! You are out of the game";
        isAlive = false;
    }   
    messageEl.textContent = message;
}

// Renders a new card and pushes it to the cardsArray
function newCard() {

    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        sumCards += newCard;

        cardsArray.push(newCard);
        renderGame();
    }       
    
}

