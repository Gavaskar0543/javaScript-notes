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
    let cardId = this.getAttribute('id');
    flipedCard.push(this);
    this.classList.remove('cardBack');
    this.innerHTML = cardArray[cardId].icon;
}