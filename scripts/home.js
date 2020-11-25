import namer from "./libs/name";

namer();

const togleMenu = document.querySelector(".menu");
const profile = document.querySelector(".profile");
profile.addEventListener("click", () => togleMenu.classList.toggle("active"));
