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

const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll("a.link");

links.forEach((link) => {
    console.info({ Link: link.dataset.link });
});

import { Link, LinkList, testLinks } from "./libs/links/link";

testLinks();

const holder = document.querySelector(".holder-temp");

const testList = new LinkList();
testList.add(new Link("Youtube", "http://youtube.com/"));
testList.add(new Link("Facebook", "http://facebook.com/"));

testList.drawChilds(holder);
