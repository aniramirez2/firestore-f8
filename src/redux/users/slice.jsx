import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAutheticated: false,
        user: null,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            console.log("action", action)
            state.user = action.payload
            state.isAutheticated  = true       
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {setUser, setError} = userSlice.actions;
export default userSlice