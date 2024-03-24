import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export const userStore = configureStore({
  reducer: {
    user: userSlice,
  },
})