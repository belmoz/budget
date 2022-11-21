import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBudget, IChannel } from "../../types/channel.interface";


const initialState: IChannel[] = [
    {
        id: 1,
        title: 'Paid Reviews',
        budget: [
            {
                month: 0,
                sum: 1000,
            },
            {
                month: 1,
                sum: 1000,
            },
            {
                month: 2,
                sum: 1000,
            },
            {
                month: 3,
                sum: 1000,
            },
            {
                month: 4,
                sum: 1000,
            },
            {
                month: 5,
                sum: 1000,
            },
            {
                month: 6,
                sum: 1000,
            },
            {
                month: 7,
                sum: 1000,
            },
            {
                month: 8,
                sum: 1000,
            },
            {
                month: 9,
                sum: 1000,
            },
            {
                month: 10,
                sum: 1000,
            },
            {
                month: 11,
                sum: 1000,
            },
        ],
    },
    {
        id: 2,
        title: 'My First Channel',
        budget: [
            {
                month: 0,
                sum: 1000,
            },
            {
                month: 1,
                sum: 1100,
            },
            {
                month: 2,
                sum: 1200,
            },
            {
                month: 3,
                sum: 1300,
            },
            {
                month: 4,
                sum: 1400,
            },
            {
                month: 5,
                sum: 1500,
            },
            {
                month: 6,
                sum: 1600,
            },
            {
                month: 7,
                sum: 1700,
            },
            {
                month: 8,
                sum: 1800,
            },
            {
                month: 9,
                sum: 1900,
            },
            {
                month: 10,
                sum: 2000,
            },
            {
                month: 11,
                sum: 2100,
            },
        ],
    },
]

function nextChannelId(channels: IChannel[]) {
    const maxId = channels.reduce((maxId, channel) => Math.max(channel.id, maxId), -1)
    return maxId + 1;
}

export const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        addChannelAction: (state, { payload }: PayloadAction<string>) => {
            state.push({
                id: nextChannelId(state),
                title: payload.trim(),
                budget: [
                    {
                        month: 0,
                        sum: 0,
                    },
                    {
                        month: 1,
                        sum: 0,
                    },
                    {
                        month: 2,
                        sum: 0,
                    },
                    {
                        month: 3,
                        sum: 0,
                    },
                    {
                        month: 4,
                        sum: 0,
                    },
                    {
                        month: 5,
                        sum: 0,
                    },
                    {
                        month: 6,
                        sum: 0,
                    },
                    {
                        month: 7,
                        sum: 0,
                    },
                    {
                        month: 8,
                        sum: 0,
                    },
                    {
                        month: 9,
                        sum: 0,
                    },
                    {
                        month: 10,
                        sum: 0,
                    },
                    {
                        month: 11,
                        sum: 0,
                    },
                ],
            })
        },
        removeChannelAction: (state, { payload }: PayloadAction<number>) => {
            const index = state.findIndex(el => el.id === payload)
            state.splice(index, 1);
        },
        updateBudgetAction: (state, { payload }: PayloadAction<{ id: number, localBudget: IBudget[] }>) => {
            const index = state.findIndex(el => el.id === payload.id)
            state[index].budget = payload.localBudget;
        },
        updateLocalSumAction: (state, { payload }: PayloadAction<{ id: number, index: number, newData: number }>) => {
            const indexChannel = state.findIndex(el => el.id === payload.id);
            state[indexChannel].budget[payload.index].sum = payload.newData;
        },
        renameChannelAction: (state, { payload }) => {
            const index = state.findIndex(el => el.id === payload.id)
            state[index].title = payload.renamedChannel.trim()
        }
    }
})

export const { addChannelAction, removeChannelAction, updateBudgetAction, updateLocalSumAction, renameChannelAction } = channelsSlice.actions;

export default channelsSlice.reducer;