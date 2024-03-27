export { Attribute, HTMLAttribute };
class Attribute {
    constructor() {
        this.owner_id = "";
        this.name = "";
        this.value = "";
    }
}
class HTMLAttribute {
    constructor(content_element, attr) {
        this.owner = content_element.querySelector(`#${attr.owner_id}`);
        this.name = attr.name;
        this.value = attr.value;
    }
    apply() {
        this.owner.setAttribute(this.name, this.value);
    }
}
