let hexColor = document.querySelector('.hexCode'); // Select the first element with class 'hexCode'
let wrap = document.querySelector('.wraper'); // Select the first element with class 'wraper'
let btn = document.querySelector('.btn'); // Select the first element with class 'btn'

let hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];




function randomIndex(){
    let index = Math.floor(Math.random()*15);
   let hexElement = hex[index];
   return hexElement;
}


function bgChange() {
    let hexCode = "#";
   for(let i = 0;i<6;i++){
     hexCode +=randomIndex();
   }
   console.log(hexCode)
   wrap.style.backgroundColor = hexCode;
   hexColor.innerText = hexCode;
   hexColor.style.color = hexCode;
  }  

btn.addEventListener('click',bgChange)