const gameBoard = document.getElementById("gameBoard");
const context = gameBoard.getContext("2d");
const WIDTH = gameBoard.width;
const HEIGHT = gameBoard.height;
//score
let socreText = document.getElementById("scoreValue");
let score = 0;
//audios
let gameStarter = document.getElementById('gameStart');
let foodEat = document.getElementById('foodAudio');
let gameOver = document.getElementById('myAudio')
//to start game
let active = true;
let starter = false;
//food width height
const UNIT = 25;
let foodx;
let foody;
//snake
let snake = [
  { x: UNIT * 3, y: 0 },
  { x: UNIT * 2, y: 0 },
  { x: UNIT, y: 0 },
  { x: 0, y: 0 },
];
//moving snake left to right
let xVelocity = 25;
let yVelocity = 0;
//key events
window.addEventListener("keydown", keyPress);
//localStorage
const HighScore = localStorage.getItem('HighScore');
if (HighScore === null) {

localStorage.setItem('HighScore',score);
}
//highScore
let highScore = document.getElementById('high-score');
highScore.innerHTML = HighScore;
function keyPress(event) {
   if(!starter){
      gameStarter.play();
         starter = true;
         nextTick();
   }
  const LEFT = 37;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;

  switch (true) {
    case (event.keyCode == LEFT && xVelocity != UNIT):
      xVelocity = -UNIT;
      yVelocity = 0;
      break;
    case event.keyCode == RIGHT && xVelocity != -UNIT:
      xVelocity = UNIT;
      yVelocity = 0;
      break;
    case event.keyCode == UP && yVelocity != UNIT:
      xVelocity = 0;
      yVelocity = -UNIT;
      break;
    case event.keyCode == DOWN && yVelocity != -UNIT:
      xVelocity = 0;
      yVelocity = UNIT;
      break;
  }
}
startGame();

function startGame() {
  context.fillStyle = "#212121";
  //xstart,ystart,width,height
  context.fillRect(0, 0, WIDTH, HEIGHT);
  //FOOD
  createFood();
  displayFood();
  drawSnake();
 
}

function clearBoard() {
  context.fillStyle = "#212121";
  //xstart,ystart,width,height
  context.fillRect(0, 0, WIDTH, HEIGHT);
}
function createFood() {
  //foodx and foody
  foodx = Math.floor((Math.random() * WIDTH) / UNIT) * UNIT;
  foody = Math.floor((Math.random() * HEIGHT) / UNIT) * UNIT;
}

function displayFood() {
  context.fillStyle = "red";
  context.fillRect(foodx, foody, UNIT, UNIT);
}

function drawSnake() {
  context.fillStyle = "aqua";
  context.strokeSyle = "#21212121";
  snake.forEach((snakePart) => {
    context.fillRect(snakePart.x, snakePart.y, UNIT, UNIT);
    context.strokeRect(snakePart.x, snakePart.y, UNIT, UNIT);
  });
}

function moveSnake() {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
  snake.unshift(head);
  if(snake[0].x == foodx && snake[0].y == foody){
    foodEat.play();
    score += 1;
    socreText.innerHTML = score;
    createFood();
  }
  else{
  snake.pop();
  }
}

function nextTick() {
   if(active){
  setTimeout(() => {
    clearBoard();
    displayFood();
    moveSnake();
    drawSnake();
    checkGameOver();
    nextTick();
    
  }, 200)
}
else{
    clearBoard();
    gameOver.play();
    context.font = "bold 50px sans-serif";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Game Over!",WIDTH/2,HEIGHT/2 );
    let checkScore = localStorage.getItem('HighScore');
    if(checkScore < score){
    localStorage.setItem('HighScore', score);
    }
    

   
      
        
      
    
}
}

function checkGameOver(){
    switch(true){
        case snake[0].x < 0:
        case snake[0].x > WIDTH:
        case snake[0].y < 0:
        case snake[0].y > HEIGHT:
            active = false;
            break;
    }
}
