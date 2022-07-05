import { createStore } from 'vuex'
import { TvShowsStore } from '@/store/tv-shows.store'
import { CommonStore } from '@/store/common.store'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    tvShows: TvShowsStore,
    common: CommonStore
  }
})
