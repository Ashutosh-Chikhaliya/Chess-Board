import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for chessboard
const chessboardSlice = createSlice({
    name: 'chessboard',
    initialState: Array(64).fill(null), // 8x8 grid
    reducers: {
        changeSquareColor: (state, action) => {
            const { index, currentColor } = action.payload;
            state[index] = currentColor === 'white' ? 'yellow' : 'red';
        },
    },
});

export const { changeSquareColor } = chessboardSlice.actions;

const store = configureStore({
    reducer: {
        chessboard: chessboardSlice.reducer,
    },
});

export default store;
