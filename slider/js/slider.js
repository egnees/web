export { Slider, from_data };
import { HTMLSlide } from "./slide.js";
import { slider_title_text_id, content_block_id } from "./defs.js";
class Slider {
    constructor(title, content_element, content, slides) {
        let header = document.getElementById(slider_title_text_id);
        header.innerHTML = title;
        this.content_element = document.getElementById(content_element);
        this.content_element.innerHTML = content;
        this.slides = slides.map(slide => new HTMLSlide(this.content_element, slide));
        this.cur_slide = 0;
        this.apply(this.slides[0].from_prev_changes);
    }
    next_slide() {
        this.cur_slide += 1;
        if (this.cur_slide == this.slides.length) {
            this.cur_slide = 0;
        }
        this.apply(this.slides[this.cur_slide].from_prev_changes);
    }
    prev_slide() {
        this.cur_slide -= 1;
        if (this.cur_slide < 0) {
            this.cur_slide = this.slides.length - 1;
        }
        this.apply(this.slides[this.cur_slide].from_next_changes);
    }
    apply(attributes) {
        attributes.forEach(attr => attr.apply());
    }
    get_slides_cnt() {
        return this.slides.length;
    }
    get_cur_slide() {
        return this.cur_slide;
    }
    is_last_slide() {
        return this.cur_slide == this.slides.length - 1;
    }
}
function from_data(data) {
    return new Slider(data.title, content_block_id, data.content, data.slides);
}
