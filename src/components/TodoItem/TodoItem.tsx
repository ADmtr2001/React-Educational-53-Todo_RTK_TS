import React, {FC} from 'react';
import {ITodo} from "../../types/ITodo";

import {Wrapper} from "./TodoItem.styles";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {removeTodo, toggleTodo} from "../../store/reducers/TodoSlice";

interface TodoItemProps {
  todo: ITodo;
  number: number;
}

const TodoItem: FC<TodoItemProps> = ({todo, number}) => {
  const dispatch = useAppDispatch();

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(removeTodo(todo.id));
  }

  return (
    <Wrapper completed={todo.completed} onClick={() => dispatch(toggleTodo(todo.id))}>
      <h2>{number}. {todo.title}</h2>
      <button onClick={handleRemove}>remove</button>
    </Wrapper>
  );
};

export default TodoItem;