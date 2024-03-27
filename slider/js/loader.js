export { Loader };
import { Builder } from './builder.js';
import { file_input_id, load_data_button_id } from './defs.js';
class Loader {
    init_load() {
        let input_element = document.getElementById(file_input_id);
        input_element.onchange = (event) => {
            let file = event.currentTarget.files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                new Builder().build_from_text(reader.result);
            };
        };
        let load_data_button = document.getElementById(load_data_button_id);
        load_data_button.onclick = () => {
            input_element.click();
        };
    }
}
