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

let count = 3;
let isButtonClicked = false;

const addSignature = () => {
  const name = document.querySelector("#name");
  const hometown = document.querySelector("#hometown");
  const email = document.querySelector("#email");

  if (!name.value || !hometown.value || !email.value) {
    alert("Please fill in all fields before submitting");
    return;
  }

  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${name.value} from ${hometown.value}`;

  const signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);

  const oldCounter = document.getElementById("counter");
  if (oldCounter) {
    oldCounter.remove();
  }

  count = count + 1;

  const newCounter = document.createElement("p");
  newCounter.id = "counter";
  newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

  // Append the new counter to the petition container
  const petitionContainer = document.querySelector(".petition-container");
  petitionContainer.appendChild(newCounter);

  isButtonClicked = true;
}

const signNowButton = document.querySelector("#sign-now-button");
signNowButton.addEventListener("click", addSignature);