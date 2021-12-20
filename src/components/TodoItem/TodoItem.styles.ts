import styled from "styled-components";

interface TodoItemStylesProps {
  completed: boolean;
}

export const Wrapper = styled.div<TodoItemStylesProps>`
  text-decoration: ${(props) => props.completed ? 'line-through' : ''};
  border: 2px solid black;
  text-align: center;
  padding: 5px;
  margin-top: 5px;
  
  :hover {
    background: aliceblue;
    cursor: pointer;
  }
`;