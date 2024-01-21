import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/404.vue'

export const routes = [
  { 
    path: '/', 
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  { path: '/:path(.*)', component: NotFound },
]