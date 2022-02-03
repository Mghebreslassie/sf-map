import styled from "styled-components";

export const PositionContainer = styled.div`
  width: calc(25% + 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const MainContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid black;
  overflow: hidden;
  margin: 4px 3px;
  &:hover {
    transition: all 0.15s ease-in;
    transform: scale(1.1);
  }
`;

export const NameContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  span {
    width: 120px;
    position: absolute;
    left: -6.3vw;
    top: 5vh;
    text-align: center;
    background: #6c69cc;
    color: white;
    border-radius: 10px;
    h5 {
      padding: 0;
      margin: 0;
      font-size: 12px;
    }
  }
`;
