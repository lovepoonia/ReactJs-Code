import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        isManu:(state)=>{
            state.isMenuOpen = false;
        },
    },
});

export const {toggleMenu , isManu} = appSlice.actions;

export  default appSlice.reducer;
