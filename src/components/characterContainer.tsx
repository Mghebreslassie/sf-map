import React from "react";
import { MainContainer } from "../styles/charactercontainer";
import CharacterBox from "./characterBox";
import { characterData } from "../data/data";
import { CharacterData } from "../data/data";
import { ViewState } from "react-map-gl";

type IProps = {
  setCurrentMarker: React.Dispatch<React.SetStateAction<string>>;
  currentMarker: string;
  characterPopup: CharacterData;
  setCharacterPopup: React.Dispatch<React.SetStateAction<CharacterData>>;
  viewport: ViewState;
  setViewport: React.Dispatch<React.SetStateAction<ViewState>>;
  onSelectCity: ({
    longitude,
    latitude,
  }: {
    longitude: number;
    latitude: number;
  }) => void;
};

const CharacterContainer: React.FC<IProps> = ({
  setCurrentMarker,
  currentMarker,
  setViewport,
  viewport,
  characterPopup,
  setCharacterPopup,
  onSelectCity,
}) => {
  return (
    <MainContainer>
      {characterData.map((char) => {
        return (
          <CharacterBox
            key={char.id}
            char={char}
            setCurrentMarker={setCurrentMarker}
            currentMarker={currentMarker}
            setViewport={setViewport}
            viewport={viewport}
            characterPopup={characterPopup}
            setCharacterPopup={setCharacterPopup}
            onSelectCity={onSelectCity}
          />
        );
      })}
    </MainContainer>
  );
};

export default CharacterContainer;
