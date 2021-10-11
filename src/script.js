
const cards = [
    { name : 'cheeseburger', img : 'images/cheeseburger.png' },
    { name : 'fries', img : 'images/fries.png' },
    { name : 'hotdog', img : 'images/hotdog.png' },
    { name : 'icecream', img : 'images/icecream.png' },
    { name : 'pizza', img : 'images/pizza.png' },
    { name : 'milkshake', img : 'images/milkshake.png' },
    { name : 'cheeseburger', img : 'images/cheeseburger.png' },
    { name : 'fries', img : 'images/fries.png' },
    { name : 'hotdog', img : 'images/hotdog.png' },
    { name : 'icecream', img : 'images/icecream.png' },
    { name : 'pizza', img : 'images/pizza.png' },
    { name : 'milkshake', img : 'images/milkshake.png'  }
] 
cards.sort(() => 0.5 - Math.random())
// to put the card into the grid
const grid = document.querySelector('.grid')
const score = document.querySelector('#score')
let chosenCards = []
let chosenCardsIds = []
let cardsWon = []

function createBord(){
    for( let i = 0; i<cards.length; i++){
        const card = document.createElement ('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
createBord()

//to flip the card
function flipCard(){
    //we get the id and use the id to know which card it is and the index of it
    let cardId = this.getAttribute('data-id')
    // on click we push the name of the card in our chosen array
    chosenCards.push(cards[cardId].name)
    //the id so we can store the name in one and id in another
    chosenCardsIds.push(cardId)
    //onclick we make add the img to it
    this.setAttribute('src',cards[cardId].img)
    if ( chosenCards.length === 2){
        //setTimeout so that we wait small then run the function
        setTimeout(checkForMatch, 500)
    }
}

function checkForMatch(){
    const cardMatch = document.querySelectorAll ('img')
    const optionOneId = chosenCardsIds[0]
    const optionTwoId = chosenCardsIds[1]
    //we need to stop clicking after click
    if (optionOneId == optionTwoId){
        alert('You cant click the same card twice')
        cardMatch[optionOneId].setAttribute('src','images/blank.png')
        cardMatch[optionTwoId].setAttribute('src','images/blank.png')
    }else if (chosenCards[0] == chosenCards[1]){

        cardMatch[optionOneId].setAttribute('src','images/white.png')
        cardMatch[optionTwoId].setAttribute('src','images/white.png')
        cardMatch[optionOneId].removeEventListener('click',flipCard)
        cardMatch[optionTwoId].removeEventListener('click',flipCard)
        alert('matchhhhhh')
        cardsWon.push(chosenCards)
        score.textContent = cardsWon.length * 2
        if(score.textContent == 12){score.textContent = 'Congratulation you won'}
    }else{
        cardMatch[optionOneId].setAttribute('src','images/blank.png')
        cardMatch[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry Try Again')
    }
    chosenCards = []
    chosenCardsIds = []
}
