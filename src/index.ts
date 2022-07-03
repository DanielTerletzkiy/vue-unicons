import {App} from "vue";
import Unicon from "./components/Unicon.vue";

export default {
    install: (app: App, options?: Object) => {
        app.component('unicon', Unicon)
    }
}
