import React, {FC} from 'react';
import {Wrapper} from "./Main.styles";
import TodoList from "../components/TodoList/TodoList";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {addTodo, removeAllTodo} from "../store/reducers/TodoSlice";
import {fetchUsers} from "../store/action-creators/Todo";
import AddForm from "../components/AddForm/AddForm";
import {ITodo} from "../types/ITodo";

const Main: FC = () => {
  const {todos} = useAppSelector(state => state.todo);
  const dispatch = useAppDispatch();

  const handleSubmit = (todo: ITodo) => {
    dispatch(addTodo(todo))
  }

  return (
    <Wrapper>
      <h1>Todos</h1>
      <AddForm handleSubmit={handleSubmit}/>
      <div className='buttons'>
        <button onClick={() => dispatch(removeAllTodo())}>Remove All</button>
        <button onClick={() => dispatch(fetchUsers())}>Fetch Todos</button>
      </div>
      <TodoList todos={todos}/>
    </Wrapper>
  );
};

export default Main;