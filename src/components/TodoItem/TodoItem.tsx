import React, {FC} from 'react';
import {ITodo} from "../../types/ITodo";

import {Wrapper} from "./TodoItem.styles";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
  return (
    <Wrapper completed={todo.completed}>
      <h2>{todo.id}. {todo.title}</h2>
      <button>remove</button>
    </Wrapper>
  );
};

export default TodoItem;