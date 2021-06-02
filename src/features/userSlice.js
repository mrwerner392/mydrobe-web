import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    user: {}
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload
    },
    updateUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { updateToken, updateUser } = userSlice.actions
export default userSlice.reducer