function createGame() {
    // var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
    const cards = [];
    let shuffledCards;
    let swappedCard;
    let newNum;
    const matches = document.querySelectorAll(".card-border");
    
    // Create Arry for cards
    for (let i = 1; i <= 18; i++) {
        cards.push(i);
    }

    shuffledCards = [...cards, ...cards];

    let cardList = shuffledCards.length;

    // Create random card array
    while (cardList) {
        newNum = Math.floor(Math.random() * cardList--);
        swappedCard = shuffledCards[cardList];
        shuffledCards[cardList] = shuffledCards[newNum];
        shuffledCards[newNum] = swappedCard;
    }

    // Create Game Layout
    shuffledCards.forEach(function (cardBlock) {
        const column = document.createElement('div');
        const cardBorder = document.createElement('div');
        const cardContent = document.createElement('div');
        
        column.setAttribute('class', 'col-2 match-card');
        document.getElementById('mainRow').appendChild(column);

        cardBorder.className = 'card-border';
        column.appendChild(cardBorder);

        cardContent.className = 'inner-card hide';
        cardContent.textContent = cardBlock;
        cardBorder.appendChild(cardContent);
    });
}
createGame();

// card tracking and manipulating 
var cardStorage = [];
const totalStorage = [];
document.addEventListener('click', function (event) {
    const eventTarget = event.target;
    // If the clicked element doesn't have the right selector, bail
    if (eventTarget.matches('.inner-card')) {
        if (cardStorage.length === 0) {
            cardStorage.push(eventTarget.innerHTML); 
            eventTarget.classList.add("show");
        }
        else if (cardStorage.length === 1) {
            cardStorage.push(eventTarget.innerHTML);
            eventTarget.classList.add("show");
            if (cardStorage[0] === cardStorage[1]) {
                if (totalStorage.length !== 36) {
                    totalStorage.push(cardStorage[0]);
                    totalStorage.push(cardStorage[1]);
                    cardStorage = [];
                }
                else {
                    return "You WON!";
                }
            }
            else {
                cardStorage = [];
            }
        }
     console.log(cardStorage);   
    }
});

// global scope pollution in javascript

// variable scopping 
// var hoisting
    // - using variables before it is declare
    // var -> hoisted
    // let/const -> scopped -> 
    // const juan  = {};
    // juan.test = true;
    // { test: true }

    // const someString = "abc";
    // something = "def";
// polluting the global space - js:
    // - functions loaded last will override pervious functions that are in the same namespace/scope
// minification (use descriptive variables)
    // completed
// ++someVar --someVar someVar++ someVar--
    // The value i++ is the value of i before the increment. The value of ++i is the value of i after the increment.
    // Example:
    // var i = 42;
    // alert(i++); // shows 42
    // alert(i); // shows 43
    // i = 42;
    // alert(++i); // shows 43
    // alert(i); // shows 43
    // The i-- and --i operators works the same way.
// Truthy falsy
// spread operator javascript instead of concat


