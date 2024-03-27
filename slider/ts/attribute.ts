export { Attribute, HTMLAttribute };

class Attribute {
    owner_id: string = "";
    name: string = "";
    value: string = "";
}

class HTMLAttribute {
    owner: HTMLElement;
    name: string;
    value: string;

    constructor(content_element: HTMLElement, attr: Attribute) {
        this.owner = content_element.querySelector(`#${attr.owner_id}`) as HTMLElement;
        this.name = attr.name;
        this.value = attr.value;
    }

    apply() {
        this.owner.setAttribute(this.name, this.value);
    }
}