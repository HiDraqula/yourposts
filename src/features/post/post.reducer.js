import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postApis from "../../services/post.apis";
// import env from "../../env";

export const getPosts = createAsyncThunk("post/getPosts", postApis.getPosts);
export const getPost = createAsyncThunk("post/getPost", postApis.getPost);
// export const createPost = createAsyncThunk(
//   "post/createPost",
//   postApis.createPost
// );
// export const updatePost = createAsyncThunk(
//   "post/updatePost",
//   postApis.updatePost
// );
export const deletePost = createAsyncThunk(
  "post/deletePost",
  postApis.deletePost
);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    list: [],
    post: { title: "Write Title Here...", body: "Write Body Here..." },
  },
  reducers: {
    // getPosts: async (state) => {
    //   // fetch(env.apiUrl+"/posts")
    //   let res = await Api.get("/posts");
    //   console.log(res.data);
    //   // state.list = [...res.data];
    // },
    createPost: (state, action) => {
      state.list.push(action.payload);
    },
    updatePost: (state, action) => {
      let updatedPost = action.payload;
      let index = state.list.findIndex((post) => post.id == updatedPost.id);
      state.list[index] = updatedPost;
    },
    // deletePost: (state, action) => {
    //   let postId = action.payload;
    //   let index = state.list.findIndex((post) => post.id == postId);
    //   state.list[index] = updatedPost;
    // },
    clearPost: (state) => {
      state.post = {};
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      // console.log({ state, payload: action.payload });
      state.list = action.payload;
    },
    [getPost.fulfilled]: (state, action) => {
      // console.log({ state, payload: action.payload });
      state.post = { ...action.payload };
    },
    // [createPost.fulfilled]: (state, action) => {
    //   // console.log({ state, payload: action.payload });
    //   state.post = { ...action.payload };
    // },
    // [updatePost.fulfilled]: (state, action) => {
    //   // console.log({ state, payload: action.payload });
    //   state.post = { ...action.payload };
    // },
    [deletePost.fulfilled]: (state, action) => {
      // console.log({ state, payload: action.payload });
      let postId = action.payload.id;
      if (postId) {
        let index = state.list.findIndex((post) => post.id == postId);
        state.list.splice(index, 1);
      }
    },
  },
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   builder.addCase(getPosts.fulfilled, (state, action) => {
  //     // Add user to the state array
  //     console.log({ state, payload: action.payload });
  //     // state.list.push(action.payload);
  //     state.list = action.payload;
  //     // state.list = [...action.payload];
  //   });
  // },
});
// Action creators are generated for each case reducer function
export const postActions = postSlice.actions;

export default postSlice.reducer;
