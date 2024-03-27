export { Data, from_json };
class Data {
    constructor() {
        this.ms_per_slide = 1;
        this.title = "";
        this.content = "";
        this.slides = [];
    }
}
function from_json(json) {
    return JSON.parse(json);
}
