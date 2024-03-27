export { Slide, HTMLSlide };
import { HTMLAttribute } from "./attribute.js";
class Slide {
    constructor() {
        this.from_prev_changes = [];
        this.from_next_changes = [];
    }
}
class HTMLSlide {
    constructor(content_element, slide) {
        this.from_prev_changes = slide.from_prev_changes.map(attr => new HTMLAttribute(content_element, attr));
        this.from_next_changes = slide.from_next_changes.map(attr => new HTMLAttribute(content_element, attr));
    }
}
