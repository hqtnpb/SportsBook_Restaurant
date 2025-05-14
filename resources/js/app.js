import "./bootstrap";
import "../scss/app.scss";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import MainLayout from "./Layouts/MainLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/src/index.scss";
import store from "../../store";

createInertiaApp({
    title: (title) => `SportBook Restaurant ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || MainLayout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ElementPlus)
            .use(store)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
});
