let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}
themeButton.addEventListener("click", toggleDarkMode);

var i = 0;
var txt = 'Distractions are everwhere! Learn more about your media consumption today!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // After all text has been typed out, wait for some time then reset and start over
    setTimeout(function() {
      document.getElementById("typewriter").innerHTML = '';
      i = 0;
      typeWriter();
    }, 5000); // 2000ms = 2s delay
  }
}

window.onload = typeWriter;


