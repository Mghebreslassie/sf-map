import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  width: 200px;
  top: 3%;
  left: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  div:nth-child(6n + 1) {
    margin-left: 15px;
  }
`;
