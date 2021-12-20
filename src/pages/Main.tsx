import React, {FC} from 'react';
import {Wrapper} from "./Main.styles";
import TodoList from "../components/TodoList/TodoList";
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {removeAllTodo} from "../store/reducers/TodoSlice";
import {fetchUsers} from "../store/action-creators/Todo";

const Main: FC = () => {
  const {todos} = useAppSelector(state => state.todo);
  const dispatch = useAppDispatch();


  return (
    <Wrapper>
      <h1>Todos</h1>
      <div className='buttons'>
        <button onClick={() => dispatch(removeAllTodo())}>Remove All</button>
        <button onClick={() => dispatch(fetchUsers())}>Fetch Todos</button>
      </div>
      <TodoList todos={todos}/>
    </Wrapper>
  );
};

export default Main;