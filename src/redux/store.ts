import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "./middlewares/localStorageMiddleware";
import { channelsSlice } from "./slices/channelsSlice";
import { switcherSlice } from "./slices/switcherSlice";

const rootReducer = combineReducers({
    switcher: switcherSlice.reducer,
    channels: channelsSlice.reducer
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;