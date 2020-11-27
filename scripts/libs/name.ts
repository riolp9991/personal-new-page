// Const of where the username will be stored
const LOCAL_STORAGE_USERNAME = "RiolpNewPageUserName";

const getAndStoreName = () => {
    // Store all the name Holders
    const nameHolders: NodeListOf<Element> = document.querySelectorAll("#name");

    // Get the username from the local storage in case the username doesn't exist ask the user for it
    let currentName: string =
        localStorage.getItem(LOCAL_STORAGE_USERNAME) ?? askForName();

    renameAllTags(nameHolders, currentName);
};

// Rename all the name holders
const renameAllTags = (elements: NodeListOf<Element>, newName: string) => {
    elements.forEach((element) => {
        element.innerHTML = newName;
    });
};

// Ask the user for the name
const askForName = (): string => {
    let newName: string = prompt("Introduce your name ...") ?? "You";
    console.info({ newName });

    localStorage.setItem(LOCAL_STORAGE_USERNAME, newName);

    return newName;
};

export default getAndStoreName;
