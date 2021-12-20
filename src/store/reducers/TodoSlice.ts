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
      state.todos = action.payload;
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
    },
    toggleTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: todo.completed};
        }
        return  todo;
      });
    },
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