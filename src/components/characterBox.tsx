import React from "react";
import {
  MainContainer,
  NameContainer,
  PositionContainer,
} from "../styles/charcterboxstyle";
import { CharacterData } from "../data/data";
import { useState } from "react";
import { ViewState } from "react-map-gl";
type IProps = {
  char: CharacterData;
  setCurrentMarker: React.Dispatch<React.SetStateAction<string>>;
  currentMarker: string;
  characterPopup: CharacterData;
  setCharacterPopup: React.Dispatch<React.SetStateAction<CharacterData>>;
  setViewport: React.Dispatch<React.SetStateAction<ViewState>>;
  viewport: ViewState;
};

const CharacterBox: React.FC<IProps> = ({
  char,
  setCurrentMarker,
  currentMarker,
  setViewport,
  viewport,
  characterPopup,
  setCharacterPopup,
}) => {
  const [showName, setShowName] = useState(false);

  return (
    <PositionContainer
      onClick={() => {
        setCharacterPopup(char);
        setViewport({
          ...viewport,
          latitude: char.lat,
          longitude: char.lon,
          zoom: 10,
        });
      }}
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
