import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterValue: 0 },
  // reducers map means object which contains multiple reducer methods
  reducers: {
    increament: (state) => {
      state.counterValue++;
    },
    decreament: (state) => {
      state.counterValue--;
    },
    add: (state, action) => {
      state.counterValue += Number(action.payload.num)
    },
    substract: (state, action) => {
      state.counterValue -= Number(action.payload.num)
    }
  }
})

export const counterActions = counterSlice.actions;
export default counterSlice;
