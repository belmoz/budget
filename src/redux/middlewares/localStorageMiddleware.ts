import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../utils/contants";
import { addChannelAction, removeChannelAction, renameChannelAction, updateBudgetAction, updateLocalSumAction } from "../slices/channelsSlice";
import { RootState } from "../store";

export const localStorageMiddleware = createListenerMiddleware();
localStorageMiddleware.startListening({
    matcher: isAnyOf(
        addChannelAction,
        removeChannelAction,
        updateBudgetAction,
        updateLocalSumAction,
        renameChannelAction,
    ),
    effect: (action, listenerApi) =>
        setLocalStorage(
            "channels",
            (listenerApi.getState() as RootState).channels
        )
});