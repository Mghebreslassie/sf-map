import {
  MainContainer,
  NameContainer,
  PositionContainer,
} from "../styles/charcterboxstyle";
import { CharacterData } from "../data/data";
import { useState } from "react";

type IProps = {
  char: CharacterData;
};

const CharacterBox: React.FC<IProps> = ({ char }) => {
  const [showName, setShowName] = useState(false);

  return (
    <PositionContainer
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <MainContainer>
        <img
          src={require(`../assets/3rdstrike/${char.image}`)}
          alt=""
          style={{ width: "100%", objectFit: "contain" }}
        />
      </MainContainer>
      {showName && (
        <NameContainer>
          <h5>{char.name}</h5>
        </NameContainer>
      )}
    </PositionContainer>
  );
};

export default CharacterBox;
