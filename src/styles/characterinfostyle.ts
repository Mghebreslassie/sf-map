import styled from "styled-components";

export const MainContainer = styled.div`
  width: 230px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 5% 0;
`;

export const TopDiv = styled.div`
  height: 30%;
  padding: 5% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    margin: 0;
    padding: 0;
  }
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CharacterAvatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  h4 {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    text-align: right;
  }
  p {
    font-size: 0.7rem;
    padding: 0;
    margin: 0;
    font-weight: 500;
    text-align: right;
  }
`;
