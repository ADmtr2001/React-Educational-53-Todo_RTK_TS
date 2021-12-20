import React, {FC} from 'react';
import {ITodo} from "../../types/ITodo";

import {Wrapper} from "./TodoItem.styles";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {removeTodo} from "../../store/reducers/TodoSlice";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
  const dispatch = useAppDispatch();

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(removeTodo(todo.id));
  }

  return (
    <Wrapper completed={todo.completed}>
      <h2>{todo.id}. {todo.title}</h2>
      <button onClick={handleRemove}>remove</button>
    </Wrapper>
  );
};

export default TodoItem;