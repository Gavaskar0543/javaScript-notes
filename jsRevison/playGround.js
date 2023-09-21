
//map
let arr = [1,2,3,4,5];
let i = 0;

let inTwo = arr.map(x =>x*2);
//filter
let blackSheep = arr.filter(x => x%2 !== 0);
//console.log(blackSheep)
//reducer

let total = arr.reduce((total,elem) => total+elem);
console.log(total);


//event deligation
