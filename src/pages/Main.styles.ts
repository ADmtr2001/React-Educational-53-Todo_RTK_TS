import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  .buttons {
    display: flex;
    gap: 10px;
    
    button {
      margin: 15px 0;
      width: 150px;
      height: 45px;
      font-size: 1.2rem;
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
  }
`;