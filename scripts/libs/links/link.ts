const LINK_LIST_STORE_NAME: string = "RiolpNewPageLinkList";

export class Link {
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    openLink() {
        window.open(this.address);
    }
}

interface IDictionary<Type> {
    [Key: string]: Type;
}

export class LinkList {
    private links: Link[];
    constructor(links?: Link[]) {
        this.links = links ?? [];
    }

    get(position: number) {
        return this.links[position];
    }

    put(position: number, value: Link) {
        this.links[position] = value;
    }

    add(value: Link) {
        this.links.push(value);
    }

    static getFromLocalStorage(): LinkList {
        const stored = localStorage.getItem(LINK_LIST_STORE_NAME);
        console.log(stored);

        try {
            if (!stored) return new LinkList();
            const values = JSON.parse(stored);
            return new LinkList(values);
        } catch (error) {
            return new LinkList();
        }
        // return new LinkList();
    }

    saveToLocalStorage() {
        try {
            localStorage.setItem(
                LINK_LIST_STORE_NAME,
                JSON.stringify(this.links)
            );
        } catch (error) {
            throw new Error(`Sinething went wrong ${error}`);
        }
    }

    getAllLinks() {
        return this.links;
    }

    drawChilds(parent: Element | null) {
        if (!parent) return;
        parent.childNodes.forEach((currentChild: ChildNode) =>
            parent.removeChild(currentChild)
        );

        this.links.forEach((element) => {
            const newChild = document.createElement("a");
            newChild.href = element.address;
            newChild.innerText = element.name;
            newChild.classList.add("link");
            parent.appendChild(newChild);
        });

        const newButton = document.createElement("button");
        newButton.innerText = "+";
        newButton.classList.add("link");
        newButton.onclick = () => {
            this.createLink(parent);
        };
        parent.appendChild(newButton);
    }

    createLink(parent: Element | null) {
        if (!parent) return;

        const name = prompt("Write the link name");
        if (!name) return;
        const link = prompt("Write the url");
        if (!link) return;

        parent.childNodes.forEach((currentChild: ChildNode) =>
            parent.removeChild(currentChild)
        );

        const newLink = new Link(name, link);

        let currentLinks = LinkList.getFromLocalStorage();
        currentLinks.add(newLink);

        currentLinks.saveToLocalStorage();

        currentLinks.drawChilds(parent);
    }
}

export function testLinks() {
    let linkTest = new LinkList();

    linkTest.add(new Link("Youtube", "http://test.com"));
    linkTest.add(new Link("Face", "http://test.com"));
    console.log({ TestLink: linkTest.get(0) });
    console.table(linkTest.getAllLinks());
    linkTest.saveToLocalStorage();
    let newTestStore = LinkList.getFromLocalStorage();
    console.table(newTestStore.getAllLinks());

    // localStorage.clear();
}
