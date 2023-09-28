"strict mode"
const cardArray= [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'cow',
        icon:'<i class="fa-solid fa-cow"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },

    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'cow',
        icon:'<i class="fa-solid fa-cow"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
];
let flipedCard = [];
let matchedPair = 0;
suffleCard();
const gameBoard = document.getElementById('gameBoard');

function suffleCard(){
for(let i = cardArray.length-1;i>0;i--){
    let randomIndex = Math.floor(Math.random()*i);
    [cardArray[i],cardArray[randomIndex]] = [cardArray[randomIndex],cardArray[i]];

}
}
displayCards();
function displayCards(){
    cardArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardBack');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
}

function flipCard(){
    if(flipedCard.length < 2 && this.classList.contains('active')){
        let cardId = this.getAttribute('id');
        flipedCard.push(this);
        this.classList.remove('cardBack');
        this.innerHTML = cardArray[cardId].icon;
       if(flipedCard.length  == 2){
       setTimeout( checkMatch,1500);
       }
    }
}

function checkMatch(){
   const card1Id = flipedCard[0].getAttribute('id');
   const card2Id = flipedCard[1].getAttribute('id');
   if(cardArray[card1Id].name == cardArray[card2Id].name){
    flipedCard[0].style.border ="none";
    flipedCard[0].style.background ="none";
    flipedCard[0].classList.remove('active');
    flipedCard[0].innerHTML = "";
    flipedCard[1].style.border ="none";
    flipedCard[1].style.background ="none";
    flipedCard[1].innerHTML = "";
    flipedCard[1].classList.remove('active');
    matchedPair++;
    checkGameOver();
   }
   else{
    flipedCard[0].innerHTML = "";
    flipedCard[0].classList.add('cardBack');
    flipedCard[1].innerHTML = "";
    flipedCard[1].classList.add('cardBack');

   }
   flipedCard = [];
}
function checkGameOver(){
if(matchedPair == cardArray.length/2){
while(gameBoard.firstChild){
gameBoard.removeChild(gameBoard.firstChild);
}
gameBoard.innerHTML =`<h1>you won!<span>&#x1F490;</span></h1>`
gameBoard.classList.remove('game');
gameBoard.classList.add('won');
}
}