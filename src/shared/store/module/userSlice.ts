import { UserType } from "@/shared/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  userInfo: UserType | null;
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
      action: PayloadAction<UserType>
    ) {      
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      console.log(action.payload);
      
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
