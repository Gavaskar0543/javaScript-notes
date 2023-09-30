document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.querySelector(".bubble-container");
    let box = ['html','css','js','bootstrap','git','backend']
    // Create bubbles dynamically
    for (let i = 0; i < 5; i++) {
      createBubble(box[i]);
    }
  
    function createBubble(code) {
      const bubble = document.createElement("div");
      bubble.innerText =code;
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
  
      bubbleContainer.appendChild(bubble);
  
      // Remove the bubble after it reaches the top
      bubble.addEventListener("animationend", () => {
        bubble.remove();
        createBubble(); // Create a new bubble
      });
    }
  });
  