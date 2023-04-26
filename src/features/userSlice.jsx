import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || "",
};

function removeFromLocalStorage() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LogoutUser: (state) => {
      (state.user = null), (state.token = "");
      removeFromLocalStorage();
    },
    getUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { LogoutUser, getUser } = userSlice.actions;

export default userSlice.reducer;
