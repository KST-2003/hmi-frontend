import { createStore } from 'vuex'

import jobs from '../modules/jobs.js'
import posts from '../modules/posts.js'

const store = createStore({
  modules: {
    jobs: jobs,
    posts:posts,

  }
})

export default store