/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CounterSliceState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
/* Types */
export interface CounterSliceState {
  value: number
}
