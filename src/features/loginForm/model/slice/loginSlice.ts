import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
// import { loginByUsername } from "../services/loginByUserName/loginByUserName";

const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(loginByUsername.pending, (state, action) => {
  //         state.error = undefined;
  //         state.isLoading = true;
  //       })
  //       .addCase(loginByUsername.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(loginByUsername.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
