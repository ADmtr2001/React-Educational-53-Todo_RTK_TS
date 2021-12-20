import React, {FC} from 'react';
import {Wrapper} from "./TodoList.styles";
import {ITodo} from "../../types/ITodo";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({todos}) => {
  return (
    <Wrapper>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </ul>
    </Wrapper>
  );
};

export default TodoList;