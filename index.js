// Array that holds the random cards dealt
let cards = [];

// Variable that holds the total amount of cards dealt
let sum = 0;

/*
 * Boolean that holds the value to determine whether 
the players' cards amount to a total of 21
 */
let hasBlackJack = false;

/**
 * Boolean value that determines whether the game is still alive for play
 */
let isAlive = false;

// Holds the message to output to the player each time they press on the buttons
let message = "";

// HTML paragraph element that outputs the message
let messageEl = document.getElementById("message-el");

// HTML paragraph element that outputs the sum of the card values
let sumEl = document.getElementById("sum-el");

// HTML paragraph element that outputs the cards dealt by the player
let cardsEl = document.getElementById("cards-el");

// Runs the login to draw random numbers(card values)
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// Initially starts the game
function startGame() {
    isAlive = true;
    // First card value
    let firstCard = getRandomCard();

    // Second card value
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

// Renders the game each time it is actively in play
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "Sorry, you're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    // Only allows the player to get a new card if the game  isAlive and does NOT have Blackjack
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
