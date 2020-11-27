const LOCAL_STORAGE_USERNAME = "RiolpNewPageUserName";

const getAndStoreName = () => {
    const nameHolder: NodeListOf<Element> = document.querySelectorAll("#name");

    let currentName: string | null = localStorage.getItem(
        LOCAL_STORAGE_USERNAME
    );

    if (!currentName) currentName = askForName();

    renameAllTags(nameHolder, currentName);
};

const renameAllTags = (elements: NodeListOf<Element>, newName: string) => {
    elements.forEach((element) => {
        element.innerHTML = newName;
    });
};

const askForName = (): string => {
    let newName: string = prompt("Introduce your name ...") ?? "You";
    console.info({ newName });

    localStorage.setItem(LOCAL_STORAGE_USERNAME, newName);

    return newName;
};

export default getAndStoreName;
