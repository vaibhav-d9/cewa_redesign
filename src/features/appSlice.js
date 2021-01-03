import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    navbarChange: false,
  },
  reducers: {
    changeNavbar: (state) => {
      state.navbarChange = !state.navbarChange;
    },
  },
});

export const { changeNavbar } = appSlice.actions;

export const selectApp = (state) => state.app.navbarChange;

export default appSlice.reducer;
