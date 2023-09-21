

function display(){
let ampm = document.getElementById('ampm');
    let dateTime = new Date();
   let hrs = dateTime.getHours();
   let mins = paddingZero(dateTime.getMinutes());
   let secs = paddingZero(dateTime.getSeconds());
   if(hrs > 12){
    hrs = hrs-12;
    ampm.innerHTML = "PM"
   }
   document.getElementById('hrs').innerHTML = hrs;
   document.getElementById('mins').innerHTML = mins;
   document.getElementById('sec').innerHTML = secs;
}


function paddingZero(num){
   return num < 10 ? "0"+num : num;

}
setInterval(display,500);