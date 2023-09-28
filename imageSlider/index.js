"use strict"
{
  const image1= 'https://images.unsplash.com/photo-1611918126831-0a8352d6196f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'; 
  const image2 = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80';
    const image3 = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    const image4 = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
    const container = document.querySelector('.container');
    const btns = document.querySelectorAll('.btn');
    const imageList = [image1,image2,image3,image4];
    let index  = 0;
    btns.forEach((button)=>{
        button.addEventListener('click',()=>{
          clearInterval(carsoule);
          if(button.classList.contains('btn-left')){
           index--;
           if(index < 0){
            index = imageList.length-1;
           }
           container.style.background = `url(${imageList[index]}) center/cover fixed`;
          }
          else {
            index++;
            if(index > imageList.length-1){
             index = 0;
            }
            container.style.background = `url(${imageList[index]}) center/cover fixed`;

          }
        });
    })

    let pos = 0;
    let active = true;
   
    
     
   let carsoule =   setInterval(()=>{
        if(pos > imageList.length-1){
          pos = 0;
        }
        container.style.background = `url(${imageList[pos++]}) center/cover fixed`;
      },2000);

    
       
       
     
   

}