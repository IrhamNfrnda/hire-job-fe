import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';

const store = configureStore({
  reducer: {
    counterSlice,
  },
});

export default store;
