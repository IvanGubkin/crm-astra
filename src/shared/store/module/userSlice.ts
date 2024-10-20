import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  userInfo: {
    id: string;
    name: string;
    email: string;
    phone: string;
  } | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        email: string;
        phone: string;
      }>
    ) {
      console.log(1);
      
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      console.log(2);
      
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
