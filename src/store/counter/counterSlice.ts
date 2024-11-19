import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
    count: 5,
    isReady: false,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        initCounterState: (state, action: PayloadAction<number>) => {
            if (state.isReady) return;
            state.count = action.payload;
            state.isReady = true;
        },
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            if (state.count === 0) return;
            state.count--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        resetCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
    },
});

export const { initCounterState, increment, decrement, incrementByAmount, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
