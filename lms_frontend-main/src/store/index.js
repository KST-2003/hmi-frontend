import { createStore } from 'vuex'

import jobs from '../modules/jobs.js'

const store = createStore({
  modules: {
    jobs: jobs
  }
})

export default store