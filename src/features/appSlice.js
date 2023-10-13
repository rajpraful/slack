import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export default appSlice.reducer;
