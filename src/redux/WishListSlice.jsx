import {createSlice} from '@reduxjs/toolkit';

export const WishListSlice = createSlice({
  name: 'Wish',
  initialState: {
    data: [],
  },
  reducers: {
    addToWishList(state, action) {
      state.data.push(action.payload);
    },
  },
});
export const {addToWishList} = WishListSlice.actions;
export default WishListSlice.reducer;
