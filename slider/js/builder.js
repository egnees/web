export { Builder };
import { slider_info_id, speed_up_button_id, speed_down_button_id, prev_button_id, next_button_id, play_stop_button_id, } from './defs.js';
import { from_json } from './data.js';
import { Interactor } from './interactor.js';
import { from_data } from './slider.js';
class Builder {
    constructor() { }
    build_from_text(text) {
        let play_stop_button = document.getElementById(play_stop_button_id);
        let next_button = document.getElementById(next_button_id);
        let prev_button = document.getElementById(prev_button_id);
        let speed_up_button = document.getElementById(speed_up_button_id);
        let speed_down_button = document.getElementById(speed_down_button_id);
        let slider_info = document.getElementById(slider_info_id);
        let data = from_json(text);
        let slider = from_data(data);
        let interactor = new Interactor(slider, data.ms_per_slide, play_stop_button, next_button, prev_button, speed_up_button, speed_down_button, slider_info);
        interactor.init();
    }
}
