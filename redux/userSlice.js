import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk("user/update", async (payload) => {
  const res = await axios.patch(`http://localhost:3000/students/${payload.id}`, payload);
  console.log(res.data);
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: null,
      nama: null,
      alamat: null,
    },
    pending: null,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.user = action.payload;
    },
    [updateUser.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
