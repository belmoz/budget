import { configureStore } from "@reduxjs/toolkit";
import { channelsSlice } from "./slices/channelsSlice";
import { switcherSlice } from "./slices/switcherSlice";
import { combineReducers } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        switcher: switcherSlice.reducer,
        channels: channelsSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;