import Api from "../api/Api";

const posts = {
  state: {
    posts: [],
    id: [],
    images: [],
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getPostId(state) {
      return state.id;
    },
    getImages(state) {
      return state.images;
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_ID(state, posts) {
      posts.forEach((post) => {
        state.id.push(post.id);
      });
    },
    SET_POST_BY_ID(state, posts) {
      state.images = posts;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const response = await Api.get("/posts");
        commit("SET_POSTS", response.data.posts.data);
        console.log(response.data.posts.data);

        commit("SET_ID", response.data.posts.data);
        console.log(response.data.posts.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async getPostById({ commit }, postIdzz) {
      try {
        const response = await Api.get(`/posts/${postIdzz}`);
        commit("SET_POST_BY_ID", response.data.post.post_images);
        console.log(response.data.post.post_images);
      } catch (error) {
        console.error("Error fetching post by id:", error);
      }
    },
  },
};

export default posts;
