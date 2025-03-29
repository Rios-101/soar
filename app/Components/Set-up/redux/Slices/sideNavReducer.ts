import { createSlice } from "@reduxjs/toolkit";

interface SideNavState {
    isOpen: boolean;
}

const initialState: SideNavState = {
    isOpen: false,
};

const sideNavSlice = createSlice({
    name: "sideNav",
    initialState,
    reducers: {
        toggleSideNav: (state) => {
            state.isOpen = !state.isOpen;
        },
        openSideNav: (state) => {
            state.isOpen = true;
        },
        closeSideNav: (state) => {
            state.isOpen = false;
        },
    },
});

// Export actions
export const { toggleSideNav, openSideNav, closeSideNav } = sideNavSlice.actions;

// Export reducer
export default sideNavSlice.reducer;
