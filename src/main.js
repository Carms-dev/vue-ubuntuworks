import { createApp } from 'vue'
import App from './App.vue'
import {
  createVuesticEssential,
  VaButton,
} from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css' // out of the box styles
import 'vuestic-ui/dist/styles/essential.css'
import 'vuestic-ui/dist/styles/grid/grid.scss'
import 'vuestic-ui/dist/styles/global/normalize.scss'
import 'vuestic-ui/dist/styles/global/typography.scss'
import './styles/index.scss'

createApp(App)
  .use(createVuesticEssential({
    components: {
      VaButton,
    },
    // plugins: { VaDropdownPlugin },
    // config: { ... }
  }))
  .mount('#app')