import { createSlice } from "@reduxjs/toolkit";

const Slicee = createSlice({
    name: "first slice",
    initialState: {
        data:[],
    },
    reducers: {
adddata : (state, action)=> {
state.data = [ action.payload, ...state.data]
console.log("data added in slice")
}
    }
})

export default Slicee.reducer
export const {adddata} = Slicee.actions