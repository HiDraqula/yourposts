import Api from "../Api";
// import env from "../env";

export default {
  getPosts: async () => {
    const res = await Api.get("/posts");
    console.log({ data: res.data });
    return res.data;
  },
  getPost: async (postId) => {
    const res = await Api.get(`/posts/${postId}`);
    console.log({ data: res.data });
    return res.data;
  },
  createPost: async (post) => {
    const res = await Api.post(`/posts`, post);
    console.log({ data: res.data });
    return res.data;
  },
  updatePost: async (post) => {
    const res = await Api.put(`/posts/${post.id}`, post);
    console.log({ data: res.data });
    return res.data;
  },
  deletePost: async (postId) => {
    const res = await Api.delete(`/posts/${postId}`);
    console.log({ data: res.data });
    return { id: postId, ...res.data };
  },
};

// function postApis() {
//   this.baseUrl = env.apiUrl + "/posts";
//   this.getPosts = async () => {
//     const res = await Api.get("/posts");
//     console.log({ data: res.data });
//     return res.data;
//   };
// }

// export default new postApis();
