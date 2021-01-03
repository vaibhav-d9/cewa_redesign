import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    navbarChange: false,
  },
  reducers: {
    changeNavbar: (state, action) => {
      state.navbarChange = action.payload;
    },
  },
});

export const { changeNavbar } = appSlice.actions;

export const selectApp = (state) => state.app.navbarChange;

export default appSlice.reducer;
