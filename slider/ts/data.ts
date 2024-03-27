export { Data, from_json }
import { Slide } from "./slide.js";

class Data {
    ms_per_slide: number = 1;
    title: string = "";
    content: string = "";
    slides: Slide[] = [];
}

function from_json(json: string): Data {
    return JSON.parse(json);
}