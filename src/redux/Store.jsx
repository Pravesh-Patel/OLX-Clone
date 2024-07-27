import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './PostSlice';
import WishListReducer from './WishListSlice';

export const store = configureStore({
  reducer: {
    post: PostReducer,
    Wish: WishListReducer,
  },
});
