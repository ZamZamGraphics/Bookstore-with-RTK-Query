const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  featured: false,
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    featured: (state, action) => {
      state.featured = action.payload;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { featured, searched } = filterSlice.actions;
