/**
 * Created by yfzhu on 2017/7/29.
 */
export const BUSINESS_UPDATE = 'BUSINESS_UPDATE';


export default {
  state: JSON.parse(localStorage.getItem('business')||'{}'),
  mutations: {
    [BUSINESS_UPDATE]( state , data) {
      try {
        Object.assign( state , data);
        localStorage.setItem('business',JSON.stringify(state))
      }catch (err){
        console.info(err)
      }
    }
  },
  actions: {
    [BUSINESS_UPDATE] ( { commit } , data ){
      commit(BUSINESS_UPDATE, data)
    }
  }
}
