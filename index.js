const toggleButton = document.getElementsByClassName("toggle-mode");
const container = document.querySelector(".container");


for (let i = 0; i < toggleButton.length; i++) {
    toggleButton[i].addEventListener("click", function () {
      container.classList.toggle("dark-mode");
    });
  }