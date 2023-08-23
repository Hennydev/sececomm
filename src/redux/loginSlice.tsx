import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface loginState {
  user: {}
}

// Define the initial state using that type
const initialState: loginState = {
  user: {}
}

export const loginSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    AddUser: (state, action) => {
      let newUser= {
        user:action.payload.user,
        email: action.payload.email,
        password: action.payload.password
      }
      state.user = newUser
    },



  },
})

export const { AddUser } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default loginSlice.reducer