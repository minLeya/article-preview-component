const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const authorInfo = document.querySelector(".author-info");
const activeState = document.querySelector(".active-state");

button1.addEventListener("click", function () {
  const isActive = activeState.classList.toggle("active");

  if (window.innerWidth < 1400) {
    authorInfo.style.display = isActive ? "none" : "";
  } else {
    button2.style.display = isActive ? "none" : "";
  }
});