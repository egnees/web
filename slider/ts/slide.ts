export { Slide, HTMLSlide };

import { Attribute, HTMLAttribute } from "./attribute.js";

class Slide {
    from_prev_changes: Attribute[] = [];
    from_next_changes: Attribute[] = [];
}

class HTMLSlide {
    from_prev_changes: HTMLAttribute[];
    from_next_changes: HTMLAttribute[];

    constructor(content_element: HTMLElement, slide: Slide) {
        this.from_prev_changes = slide.from_prev_changes.map(attr => new HTMLAttribute(content_element, attr));
        this.from_next_changes = slide.from_next_changes.map(attr => new HTMLAttribute(content_element, attr));
    }
}