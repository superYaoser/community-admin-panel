import { createStore} from 'vuex'
import {IUser} from '@/utils/Interface/vuex/user'
interface IState {
  user: IUser;
}

export default createStore<IState>({
  state: {
    user: {} as IUser
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    addUser(state: IState, user: IUser) {
      state.user = user;
    }
  },
  actions: {
    addUser({ commit }, user: IUser) {
      commit('addUser', user);
    }
  },
  modules: {
  }
})
