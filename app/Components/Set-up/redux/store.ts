import { configureStore } from "@reduxjs/toolkit";
import sideNavReducer from "./Slices/sideNavReducer";

export const store = configureStore({
    reducer: {
        sideNav: sideNavReducer,
    },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
