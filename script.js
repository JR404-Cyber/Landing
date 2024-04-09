let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = "julfikar"
})
window.addEventListener('focus', () =>{
  document.title = docTitle
})

const menu = document.querySelector("#menu-icon");
const x = document.querySelector("#icon");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector('li');

menu.onclick = () => {
    navbar.classList.add("active");
    x.classList.add("active");
    menu.classList.add('active')

    
}
x.onclick = () => {
    navbar.classList.remove("active")
    x.classList.remove("active")
    menu.classList.remove('active')

    
}
nav.onclick = () => {
    navbar.classList.remove("active")
    x.classList.remove("active")
    menu.classList.remove("active")

    
}

const textLines = [
    "Web Devoloper",
    "Pogramaer",
    "Hacker",
    "Photographer"
  ];

  const textContainer = document.getElementById("text-container");
  let currentIndex = 0;
  let currentLine = "";
  let isTyping = true;

  function typeText() {
    currentLine = textLines[currentIndex];
    textContainer.textContent = currentLine.substring(0, textContainer.textContent.length + 1);

    if (textContainer.textContent === currentLine) {
      isTyping = false;
      setTimeout(eraseText, 1500);
    } else {
      setTimeout(typeText, 80);
    }
  }

  function eraseText() {
    textContainer.textContent = currentLine.substring(0, textContainer.textContent.length - 1);

    if (textContainer.textContent === "") {
      isTyping = true;
      currentIndex = (currentIndex + 1) % textLines.length;
      setTimeout(typeText, 500);
    } else {
      setTimeout(eraseText, 50);
    }
  }

  // Start the typing animation
  setTimeout(typeText, 500);