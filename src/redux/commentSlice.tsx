import { createSlice,PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface commentState {
  comment: any
}

// Define the initial state using that type
const initialState: commentState = {
  comment:[]
}

export const commentSlice = createSlice({
  name: 'comment',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addComment: (state, {payload: {comment}} : PayloadAction<{comment: any}>) => {
      let newComment= {
        id:Math.random(),
        user: comment.user,
        Comment: comment.comment
        
      }
      state.comment = [...state.comment, newComment];
      // state.comment = newComment
    },



  },
})

export const { addComment } = commentSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default commentSlice.reducer