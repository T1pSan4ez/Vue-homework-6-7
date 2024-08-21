import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createVuetify} from 'vuetify'

import App from './App.vue'

import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from "@/router/index.js";


import validateData from "@/components/Lesson7/mixins/ValidateData.js";
import dragAndDrop from "@/components/Lesson7/directives/DragAndDrop.js";

const vuetify = createVuetify({
    components,
    directives
})
const pinia = createPinia();

const app = createApp(App)

app.use(pinia)
    .use(vuetify)
    .use(router)
    .mixin(validateData)
    .directive('draggable', dragAndDrop)
app.directive('color', {
    mounted(el, binding) {
        el.style.color = binding.value;
    }
})

app.mount('#app')
