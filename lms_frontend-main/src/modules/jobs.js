import Api from '../api/Api';
import axios from 'axios';  

const jobs = {
  state: {
    jobs: [],
  },
  getters: {
    getJobs(state) {
      return state.jobs;
    },
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    async getJobs({ commit }) {
      try {
        // const response = await axios.get(`${MyApi}/careeropportunity`);
        const response = await Api.get('/careeropportunity');
        commit("SET_JOBS", response.data.career);
        console.log(response.data.career);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    },
  },
};

export default jobs;

