import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import store from './store/index.js'
import "./assets/styles/bootstrap.min.css"
import "./assets/styles/mystyles.css"   
import {BootstrapVue3} from 'bootstrap-vue-3'
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"
import './lib/utils/configaxios.js'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import Vuelidate from '@vuelidate/core'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import "quasar/src/css/index.sass"
// Print
import print from 'vue3-print-nb'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(print)
app.use(BootstrapVue3)
app.use(Notifications)
app.use(Vuelidate)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
//app.use(VueHtmlToPaper, options)
app.mount('#app')