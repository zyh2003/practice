import loginApi from '@/api/user'
import { setItem, getItem } from '../../utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || ''
  },
  mutations: {
    /**
     * 获取token
     * @param {*} state
     * @param {*} token
     */
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    }
  },
  actions: {
    async getLogin({ commit }, payload) {
      // console.log('payload', payload)
      const response = await loginApi.getLogin(payload)
      console.log('veux=>', response)
      return response
    }
  }
}
