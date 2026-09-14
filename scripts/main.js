const myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

myHeading.textContent = "Работает!";

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/agony.png") {
    myImage.setAttribute("src", "images/screamer.png");
  } else {
    myImage.setAttribute("src", "images/agony.png");
  }
});

function setUserName() {
  const myName = prompt("Введите свое имя.");
  if (myName) {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Сайт же заебись, ${myName}?`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Сайт же заебись, ${storedName}?`;
}

myButton.addEventListener("click", () => {
  setUserName();
});