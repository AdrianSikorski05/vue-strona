import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'            // Styl bazowy
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,  // <--- kluczowe
    directives,  // <--- kluczowe
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
          myCustomTheme: {
            dark: false,
            colors: {
              primary: '#ffb6c1', // Różowy kolor na pasku nawigacji
              secondary: '#ffffff', // Kolor przycisków
            }
          }
        }
      }
  })

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
