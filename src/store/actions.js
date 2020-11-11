import * as api from '../api'

const actions = {
  FETCH_RESULTS({commit}, {keyword}){
    //commit('SET_RESULTS', {keyword})
    api.manual.fetch(keyword).then(data =>{
      commit('SET_RESULTS', {results:data.hits.hit, keyword: keyword})
    })
  },
  FETCH_CODES({commit}){
    api.main.fetch().then(data => {
      console.log(data)
      commit('SET_CODES', {codes:data.product_code})
    })
  }
}

export default actions
