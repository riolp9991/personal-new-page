import namer from "./libs/name";

namer();

const togleMenu: Element | null = document.querySelector(".menu");
const profile: Element | null = document.querySelector(".profile");

profile?.addEventListener("click", () => togleMenu?.classList.toggle("active"));
