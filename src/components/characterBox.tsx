import {
  MainContainer,
  NameContainer,
  PositionContainer,
} from "../styles/charcterboxstyle";
import { CharacterData } from "../data/data";
import { useState } from "react";

type IProps = {
  char: CharacterData;
  setCurrentMarker: React.Dispatch<React.SetStateAction<string>>;
  currentMarker: string;
};

const CharacterBox: React.FC<IProps> = ({
  char,
  setCurrentMarker,
  currentMarker,
}) => {
  const [showName, setShowName] = useState(false);

  return (
    <PositionContainer
      onMouseEnter={() => {
        setShowName(true);
        setCurrentMarker(char.name);
      }}
      onMouseLeave={() => {
        setCurrentMarker("");
        setShowName(false);
      }}
    >
      <MainContainer>
        <img
          src={require(`../assets/3rdstrike/${char.image}`)}
          alt=""
          style={{ height: "100%", objectFit: "contain" }}
        />
      </MainContainer>
      {showName && (
        <NameContainer>
          <span>
            <h5>{char.name}</h5>
          </span>
        </NameContainer>
      )}
    </PositionContainer>
  );
};

export default CharacterBox;
