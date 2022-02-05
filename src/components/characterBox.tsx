import {
  MainContainer,
  NameContainer,
  PositionContainer,
} from "../styles/charcterboxstyle";
import { CharacterData } from "../data/data";
import { useState } from "react";
import { TransitionInterpolator } from "react-map-gl";
type IProps = {
  char: CharacterData;
  setCurrentMarker: React.Dispatch<React.SetStateAction<string>>;
  currentMarker: string;
  characterPopup: CharacterData;
  setCharacterPopup: React.Dispatch<React.SetStateAction<CharacterData>>;
  setViewport: React.Dispatch<
    React.SetStateAction<
      Partial<{
        width: number;
        height: number;
        latitude: number;
        longitude: number;
        zoom: number;
        bearing: number;
        pitch: number;
        altitude: number;
        maxZoom: number;
        minZoom: number;
        maxPitch: number;
        minPitch: number;
        transitionDuration: number | "auto";
        transitionEasing: (t: number) => number;
        transitionInterpolator: TransitionInterpolator;
        transitionInterruption: number;
      }>
    >
  >;
  viewport: Partial<{
    width: number;
    height: number;
    latitude: number;
    longitude: number;
    zoom: number;
    bearing: number;
    pitch: number;
    altitude: number;
    maxZoom: number;
    minZoom: number;
    maxPitch: number;
    minPitch: number;
    transitionDuration: number | "auto";
    transitionEasing: (t: number) => number;
    transitionInterpolator: TransitionInterpolator;
    transitionInterruption: number;
  }>;
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
