import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveProfile: (state, action) => {
      state.profile = action.payload;
    },

    resetProfile: (state) => {
      state.profile = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveProfile, resetProfile } = authSlice.actions;

export default authSlice.reducer;