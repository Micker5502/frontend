import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import { getModule } from 'vuex-module-decorators';
import createPersistedState from 'vuex-persistedstate';
import themeConfig from '@/store/modules/themeConfig'

Vue.use(Vuex)
const store =new Vuex.Store({
  state: {
    count: 0,
    darkmode: false
  },
  getters:{
    getDarkMode: state =>{
      return state.darkmode;
    }
  },
  mutations: {
    setDarkMode(state){
      state.darkmode = !state.darkmode
    }
  },
  actions: {
  },
  modules: {
    user,
    themeConfig
  },
  plugins: [
    createPersistedState({
            storage: window.localStorage
        })
    ]
}

)

export default store

export const themeConfigModule = getModule(themeConfig,store);
export const userModule = getModule(user,store);
