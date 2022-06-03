import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Butter from 'buttercms';

const app = createApp(App)


app.use(router)

// Global Components
import CNavigation from './components/CNavigation.vue'

app.component('c-navigation', CNavigation)

router.isReady()
  .then(() => app.mount('#app'))


