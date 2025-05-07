
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ReduxUserType = {
  token: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
});

export const {addToken} = userSlice.actions;

export default userSlice.reducer;
