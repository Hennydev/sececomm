import { configureStore } from '@reduxjs/toolkit'
import loginReducer  from './loginSlice'
import CartReducer from "./cartSlice"
import commentReducer from "./commentSlice"
// ...

export const store = configureStore({
  reducer: {
   login: loginReducer,
   Cart : CartReducer,
   comment:commentReducer
  },
})

