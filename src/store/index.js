import { createStore } from 'vuex'
import { homeModule } from '@/store/modules/homeModule.js'
import { topRatedMoviesModule } from '@/store/modules/topRatedMoviesModule'
import { latestMoviesModule } from '@/store/modules/latestMoviesModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home: homeModule,
    topRated: topRatedMoviesModule,
    latestMovies: latestMoviesModule
  }
})
