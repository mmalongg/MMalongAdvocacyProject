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
// signNowButton.addEventListener("click", addSignature);

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  
  // Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add("error");
      containsErrors = true;
      alert("Please fill in all fields before submitting");
    } else {
      petitionInputs[i].classList.remove("error");
    }

    // Check if the input is an email field
    if (petitionInputs[i].id === "email" && !petitionInputs[i].value.includes(".com")) {
      petitionInputs[i].classList.add("error");
      containsErrors = true;
      alert("Please enter a valid email address");
    }
  }
  
  // Validate the value of each input, call add Signature() and clear fields if no errors
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}

signNowButton.addEventListener('click', validateForm);

const email = document.getElementById("email");

if (!email.value.includes(".com")) {
  containsErrors = true;
  email.classList.add("error");
} else {
  email.classList.remove("error");
}

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
};

window.addEventListener('scroll', reveal);