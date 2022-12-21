import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

// oh, vue icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaGooglePlusG, CoFacebookF, CoLinkedinIn, CoTwitch, CoTwitter, BiDribbble, BiStarFill } from "oh-vue-icons/icons";


addIcons(FaGooglePlusG, CoFacebookF, CoLinkedinIn, CoTwitch, CoTwitter, BiDribbble, BiStarFill);

// createApp(App).component("v-icon", OhVueIcon).mount('#app')
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
