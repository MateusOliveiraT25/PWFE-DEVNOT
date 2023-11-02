import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogoDeFilmes from "../components/CatalogoDeFilmes.vue"
import CatalogoDeLivros from "../components/CatalogoDeLivros.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/livros',
    component: CatalogoDeLivros
  },
   
   { path: '/filmes',
    component: CatalogoDeFilmes
   }
  
  ]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
