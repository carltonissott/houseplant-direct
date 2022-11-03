import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        loggedIn: false,
        firstname: "",
    },
    reducers:{
        logInUser(state,action){
            state.loggedIn = true;
            state.firstname = action.payload //action = only first name, if we wanted to put in an object, we'd put action.payload.firstname
        },
        logOutUser(state,action){
            state.loggedIn = false;
            state.firstname = ""
        }
    }
})

export default userSlice

export const userActions = userSlice.actions