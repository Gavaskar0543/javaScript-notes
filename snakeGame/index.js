const gameBoard = document.getElementById('gameBoard');
const context = gameBoard.getContext('2d');
const WIDTH = gameBoard.width;
const HEIGHT = gameBoard.height;
//food width height
const UNIT = 25;
let foodx;
let foody;
//snake
let snake = [
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}
];
//moving snake left to right
let xVelocity = 25;
let yVelocity = 0;
//key events
window.addEventListener('keydown',keyPress);

function keyPress(event){
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    switch(true){
   
    case(event.keyCode == LEFT):
           xVelocity = -UNIT;
           yVelocity = 0;

    }


}
startGame();


function startGame(){
    context.fillStyle = '#212121';
    //xstart,ystart,width,height
    context.fillRect(0,0,WIDTH,HEIGHT);
    //FOOD
    createFood();
    displayFood();
    
   nextTick();
    

}

function clearBoard(){
    context.fillStyle = '#212121';
    //xstart,ystart,width,height
    context.fillRect(0,0,WIDTH,HEIGHT);

}
function createFood(){

    //foodx and foody
 foodx =Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
 foody =Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;

}

function  displayFood(){  
    context.fillStyle ="red";
    context.fillRect(foodx,foody,UNIT,UNIT)
}



function drawSnake(){
    context.fillStyle = 'aqua';
    context.strokeSyle = '#21212121';
    snake.forEach((snakePart) =>{
        context.fillRect(snakePart.x,snakePart.y,UNIT,UNIT);
        context.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT);
    })
}


function moveSnake(){
const head = {x:snake[0].x+xVelocity,y:snake[0].y+yVelocity};
snake.unshift(head);
snake.pop();
}

function nextTick() {
    setTimeout(()=>{
        clearBoard();
        displayFood();
        moveSnake();
        drawSnake();
        nextTick();
    },500)
  }