const getAndStoreName = () => {
    const nameHolder = document.querySelectorAll("#name");

    localStorage.setItem("RiolpNewPageUserName", "MarioLP");
    let currentName = localStorage.getItem("RiolpNewPageUserName");

    nameHolder.forEach((element) => (element.innerHTML = currentName));

    if (!currentName) {
        let newName = prompt("Introduce your name ...");
        console.info({ newName });
        localStorage.setItem("RiolpNewPageUserName", newName ? newName : "You");
        getAndStoreName();
    }
};

export default getAndStoreName;
