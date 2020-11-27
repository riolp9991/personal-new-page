import namer from "./libs/name";

namer();

const togleMenu: Element | null = document.querySelector(".menu");
const profile: Element | null = document.querySelector(".profile");

if (!profile || !togleMenu) alert("Something Went Wrong With The Menu");
else
    profile.addEventListener("click", () =>
        togleMenu.classList.toggle("active")
    );

const searchInput: HTMLInputElement | null = document.querySelector(
    "#searchText"
);

searchInput?.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
        window.open(`http://google.com/search?q=${searchInput.value}`);
        searchInput.value = "";
    }
});
