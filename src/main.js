import { createApp } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import zh from "./languages/zh-TW.json";
import jp from "./languages/jp.json";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";

import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import App from "./App.vue";
import router from "./router";
import VueQrcode from "vue-qrcode";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser);

const i18n = createI18n({
  legacy: false, // 啟用新的 Vue3 選項
  locale: "zh-TW", // 設置默認語言
  messages: {
    jp,
    "zh-TW": zh, // 引入 zh-TW.json 文件
  },
});

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(LoadingPlugin, {
  color: "#FF0000",
});

app.component("BootstrapIcon", BootstrapIcon);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.use(VueAxios, axios);

app.component("vue-qrcode", VueQrcode);
app.mount("#app");
