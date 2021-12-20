import React, {FC} from 'react';
import {Wrapper} from "./Main.styles";
import TodoList from "../components/TodoList/TodoList";
import {useAppSelector} from "../hooks/useAppSelector";

const Main: FC = () => {
  const {todos} = useAppSelector(state => state.todo);

  return (
    <Wrapper>
      <h1>Todos</h1>
      <TodoList todos={todos}/>
    </Wrapper>
  );
};

export default Main;