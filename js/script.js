document.addEventListener("DOMContentLoaded", () => {
    const text = "MCA Community Hub";
    const textContainer = document.querySelector(".text");
    const cursor = document.querySelector(".cursor");
    const welcomeText = document.getElementById('welcome-text');
    const welcomeContainer = document.querySelector(".welcome-container");
    const mainContainer = document.querySelector(".main-container");
  
    let i = 0;
    let typingSpeed = 100; // Speed of typing in milliseconds
  
    // Function to simulate typing effect
    function type() {
      if (i < text.length) {
        textContainer.textContent += text.charAt(i);
        i++;
        setTimeout(type, typingSpeed);
      }
      else{
        setTimeout(() => {
            cursor.style.display = 'none';
            welcomeText.style.opacity = 0;            // hiding the cursor

            welcomeContainer.classList.add('bye-anim');   // animation to become circle
            mainContainer.style.opacity = '1';                
            // welcomeContainer.addEventListener('animationend', () => { // Make the content visible
            //      // Trigger the fade-in effect
            // });

            setTimeout(() => {
                welcome.style.display = 'none';
            }, 1000);
        }, 1000)
      }
    }
  
    // Start typing effect
    type();

    
  });
  