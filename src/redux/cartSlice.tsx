import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface CartState {
  cart: any;
}

// Define the initial state using that type
const initialState: CartState = {
  cart: []
}

export const CartSlice = createSlice({
  name: 'Cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    AddItem: (state, {payload:{cart}}:PayloadAction<{cart:any}>) => {
    const itemInCart = state.cart.find((item: any)=>item?.id === cart.id)
    if(itemInCart){
        itemInCart.quantity++
    }else{
        state.cart= [...state.cart, cart]
    }      

}

  



  },
})

export const { AddItem } = CartSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default CartSlice.reducer