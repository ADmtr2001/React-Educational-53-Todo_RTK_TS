import {AppDispatch} from "../store";
import {todoFetching, todoFetchingError, todoFetchingSuccess} from "../reducers/TodoSlice";
import axios from "axios";
import {ITodo} from "../../types/ITodo";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todo/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      return response.data
    } catch (e: any) {
      return  thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchTodos = () => async (dispatch:AppDispatch) => {
//   try {
//     dispatch(todoFetching());
//     const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
//     dispatch((todoFetchingSuccess(response.data)))
//   } catch (err: any) {
//     dispatch(todoFetchingError(err.message));
//   }
// }
