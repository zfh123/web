/**
 * Created by yfzhu on 2017/7/29.
 * 店主、店员
 */
export const USER_LOGIN = 'USER_LOGIN';


export default {
  state: {},
//  state: JSON.parse(localStorage.getItem('user')||'{}'),

  mutations: {
    [USER_LOGIN](state, data) {
      try {
        Object.assign(state, data);
        localStorage.setItem('user', JSON.stringify(state))
      } catch (err) {
        console.info(err)
      }
    }
  },
  actions: {
    [USER_LOGIN]({commit}, data) {
      commit(USER_LOGIN, data)
    }
  }
}
