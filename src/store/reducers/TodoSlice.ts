import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo, TodoState} from "../../types/ITodo";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoFetching(state) {
      state.isLoading = true;
    },
    todoFetchingSuccess(state, action: PayloadAction<ITodo[]>) {
      state.isLoading = false;
      state.error = null;
      state.todos.unshift(...action.payload);
    },
    todoFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.unshift(action.payload);
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    removeAllTodo(state) {
      state.todos = [];
    }
  },
  extraReducers: {}
});

export default todoSlice.reducer;
export const {
  addTodo,
  removeAllTodo,
  removeTodo,
  todoFetchingError,
  todoFetching,
  todoFetchingSuccess
} = todoSlice.actions;