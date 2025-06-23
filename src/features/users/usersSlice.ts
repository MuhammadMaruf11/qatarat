import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import type { User } from "../../types/usersTypes";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Async thunk for fetching users (API simulation)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axiosInstance.get<User[]>("/users");
  return response.data;
});

// Async thunk for updating user info
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user: User) => {
    const response = await axiosInstance.put<User>(`/users/${user.id}`, user);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.users[index] = action.payload;
      });
  },
});

export default usersSlice.reducer;
