import {configureStore}  from '@reduxjs/toolkit'
import {todoReducer} from '../features/TodoSlice'

 const store = configureStore({
    reducer: todoReducer // Define your reducers here.
});

export default store;