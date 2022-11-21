import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface ISwitcherState {
    value: string
}

const initialState: ISwitcherState = {
    value: 'Equal'
}

export const switcherSlice = createSlice({
    name: 'switcher',
    initialState,
    reducers: {
        onSwitcherAction: (state, { payload }) => {
            state.value = payload === 'Equal' ? 'Equal' : 'Manual';
        }
    }
})

export const { onSwitcherAction } = switcherSlice.actions;

export const selectSwitcher = (state: RootState) => state.switcher.value;
export default switcherSlice.reducer;