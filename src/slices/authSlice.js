// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async login thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });

      // Handle API success
      if (response.data.status === "success") {
        return {
          token: response.data.token,
          userId: response.data.userId,
        };
      } else {
        // Handle API failure
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      // Network or server error
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const initialState = {
  token: null,
  userId: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
