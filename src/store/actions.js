import * as api from '../api'

const actions = {
  FETCH_RESULTS ({commit}, {keyword}) {
    // commit('SET_RESULTS', {keyword})
    api.manual.fetch(keyword).then(data => {
      commit('SET_RESULTS', {results: data.hits.hit, keyword: keyword})
    })
  },
  FETCH_CODES ({commit}) {
    api.main.fetch().then(data => {
      console.log(data)
      commit('SET_CODES', {codes: data.product_code})
    })
  },
  CUSTOM_CREATE ({commit}, {userId}) {
    api.custom.create(userId).then(data => {
      console.log(data)
    })
  },
  FETCH_CUSTOM ({commit}, {userId}) {
    api.custom.fetch(userId).then(data => {
      commit('SET_CUSTOM', {custom: data})
    })
  }
}

export default actions
