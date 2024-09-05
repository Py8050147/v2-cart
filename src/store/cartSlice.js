import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartreducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            state.push(action.payload)
            },
            removefromcart: (state, action) => {
                state = state.filter((item) => item.id !== action.payload.id)
                return state
                },
                // updatecart: (state, action) => {
                //     state = state.map((item) => {
                //         if (item.id === action.payload.id) {
                //             return action.payload
                //             }
                //             return item
                //             })
                //             return state
                            },
})

export const {addtocart, removefromcart} = cartreducer.actions
export default cartreducer.reducer