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
  width: 100%;
  
  button {
    margin-top: 5px;
    width: 100px;
    height: 30px;
    background: lightblue;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: bold;
    
    :hover {
      background: cornflowerblue;
      color: white;
    }
  }
  
  :hover {
    background: aliceblue;
    cursor: pointer;
  }
`;