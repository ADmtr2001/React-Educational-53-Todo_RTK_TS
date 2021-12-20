import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: lightgray;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  a {
    margin: 5px;
    background: black;
    color: white;
    width: 100px;
    height: 30px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;