import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(item.quantity - 1, 0);
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
