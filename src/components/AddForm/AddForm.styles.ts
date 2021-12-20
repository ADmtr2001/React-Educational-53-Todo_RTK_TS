import styled from "styled-components";

export const Wrapper = styled.form`
  min-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  input {
    width: 50%;
    height: 30px;
    padding: 5px;
    border: 2px solid black;
  }
  
  button {
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
`;