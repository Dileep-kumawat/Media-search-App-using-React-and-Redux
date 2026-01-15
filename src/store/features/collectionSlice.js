import { createSlice } from "@reduxjs/toolkit";

const collection = createSlice({
    name: "collection",
    initialState: {
        data: JSON.parse(localStorage.getItem("collection")) || []
    },
    reducers: {
        setData(state, action) {
            state.data = action.payload;
            localStorage.setItem("collection", JSON.stringify(state.data));
        }
    }
})

export const { setData } = collection.actions;
export default collection.reducer;