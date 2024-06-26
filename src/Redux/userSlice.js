import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
  user: {
    username: '',
    password: '',
    role: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, data) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      sessionStorage.setItem('user', JSON.stringify(data.payload));
      state.user = data.payload


    },
    removeUser: (state) => {

      sessionStorage.removeItem('user');
      state.user = {
        username: '',
        userData: {},
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer