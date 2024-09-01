import { createSlice } from "@reduxjs/toolkit";

export const jobPostReducer = createSlice({
  name: "jobs",
  initialState: {
    posts: [],
    post: {},
    loading: false,
  },
  reducers: {
    setAllPost: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },

    setPost: (state, action) => {
      state.post = state.posts.find((post) => post._id === action.payload);
      state.loading = false;
    },

    postNewJob: (state, action) => {
      state.posts = [...state.posts, action.payload],
        state.loading = false;
    },

    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id !== action.payload._id ? post : { ...action.payload }
      );

      state.loading = false;
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const {
  setAllPost,
  setPost,
  postNewJob,
  updatePost,
  deletePost,
  setLoading,
} = jobPostReducer.actions;

export const selectJobPosts = (state) => state.job;

export default jobPostReducer.reducer;
