export { Interactor };

import { Slider } from './slider.js';

class Interactor {
    slider: Slider;
    play_stop_button: HTMLButtonElement;
    next_button: HTMLButtonElement;
    prev_button: HTMLButtonElement;
    speed_up_button: HTMLButtonElement;
    speed_down_button: HTMLButtonElement;
    slider_info: HTMLElement;

    is_playing: boolean;
    slide_time: number; // ms

    playing_timer: any = null;

    constructor(
        slider: Slider,
        slide_time: number,
        play_stop_button: HTMLButtonElement,
        next_button: HTMLButtonElement, prev_button: HTMLButtonElement,
        speed_up_button: HTMLButtonElement, speed_down_button: HTMLButtonElement,
        slider_info: HTMLElement) {
        this.slider = slider;
        this.play_stop_button = play_stop_button;
        this.next_button = next_button;
        this.prev_button = prev_button;
        this.speed_up_button = speed_up_button;
        this.speed_down_button = speed_down_button;
        this.slider_info = slider_info;

        this.is_playing = false;
        this.slide_time = slide_time;
    }

    init() {
        this.set_play_stop_listener();

        this.set_next_slide_listener();
        this.set_prev_slide_listener();

        this.set_speed_up_listener();
        this.set_speed_down_listener();

        this.update_slider_info();
    }

    set_play_stop_listener() {
        this.play_stop_button.addEventListener("click", () => {
            if (this.is_playing) {
                this.stop_play();
            } else {
                this.start_play();
            }
        });
    }

    set_next_slide_listener() {
        this.next_button.addEventListener("click", () => {
            if (this.is_playing) {
                this.stop_play();
            }
            this.slider.next_slide();
            this.update_slider_info();
        });
    }

    set_prev_slide_listener() {
        this.prev_button.addEventListener("click", () => {
            if (this.is_playing) {
                this.stop_play();
            }
            this.slider.prev_slide();
            this.update_slider_info();
        });
    }

    set_speed_up_listener() {
        this.speed_up_button.addEventListener("click", () => {
            let was_playing: boolean = false;
            if (this.is_playing) {
                this.stop_play();
                was_playing = true;
            }

            this.slide_time -= 5;
            if (this.slide_time < 1) {
                this.slide_time = 1;
            }

            this.update_slider_info();

            if (was_playing) {
                this.start_play();
            }
        });
    }

    set_speed_down_listener() {
        this.speed_down_button.addEventListener("click", () => {
            let was_playing: boolean = false;
            if (this.is_playing) {
                this.stop_play();
                was_playing = true;
            }

            this.slide_time += 5;

            this.update_slider_info();

            if (was_playing) {
                this.start_play();
            }
        });
    }

    start_play() {
        console.assert(!this.is_playing);
        this.is_playing = true;
        this.playing_timer = setInterval(() => {
            if (this.slider.is_last_slide()) {
                this.stop_play();
            } else {
                this.slider.next_slide();
                this.update_slider_info();
            }
        }, this.slide_time);
    }

    stop_play() {
        console.assert(this.is_playing);
        this.is_playing = false;
        clearInterval(this.playing_timer);
    }

    update_slider_info() {
        this.slider_info.innerHTML = `Slide: ${this.slider.get_cur_slide() + 1}/${this.slider.get_slides_cnt()}, slides/s: ${(100.0 / this.slide_time).toFixed(2)}`;
    }
}