import i18n from '@/i18n'

export default {
  state: {
    loading: [],
    lang: 'en'
  },
  actions: {
    
  },
  mutations: {
    setLang(state, val) {
      localStorage.setItem('lang', val)
      i18n.locale = val;
      state.lang = val;
    }
  },
  getters: {
    getLang(state) {
      return state.lang
    }
  }
}