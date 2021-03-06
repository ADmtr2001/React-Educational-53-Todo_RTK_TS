import React, {FC, useEffect} from 'react';
import {Wrapper} from "./Main.styles";
import TodoList from "../components/TodoList/TodoList";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {addTodo, removeAllTodo, todoFetchingSuccess} from "../store/reducers/TodoSlice";
import {fetchTodos} from "../store/action-creators/Todo";
import AddForm from "../components/AddForm/AddForm";
import {ITodo} from "../types/ITodo";
import {todoAPI} from "../services/TodoService";

const Main: FC = () => {
  // const {data: todos} = todoAPI.useFetchTodoQuery();
  const dispatch = useAppDispatch();
  const {todos} = useAppSelector(state => state.todo);

  const handleSubmit = (todo: ITodo) => {
    dispatch(addTodo(todo))
  }

  return (
    <Wrapper>
      <h1>Todos</h1>
      <AddForm handleSubmit={handleSubmit}/>
      <div className='buttons'>
        <button onClick={() => dispatch(removeAllTodo())}>Remove All</button>
        <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      </div>
      {todos && <TodoList todos={todos}/>}
    </Wrapper>
  );
};

export default Main;