import { MainContainer } from "../styles/charactercontainer";
import CharacterBox from "./characterBox";
import { characterData } from "../data/data";
import { CharacterData } from "../data/data";
import { TransitionInterpolator } from "react-map-gl";

type IProps = {
  setCurrentMarker: React.Dispatch<React.SetStateAction<string>>;
  currentMarker: string;
  characterPopup: CharacterData;
  setCharacterPopup: React.Dispatch<React.SetStateAction<CharacterData>>;
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
};

const CharacterContainer: React.FC<IProps> = ({
  setCurrentMarker,
  currentMarker,
  setViewport,
  viewport,
  characterPopup,
  setCharacterPopup,
}) => {
  return (
    <MainContainer>
      {characterData.map((char) => {
        return (
          <CharacterBox
            char={char}
            setCurrentMarker={setCurrentMarker}
            currentMarker={currentMarker}
            setViewport={setViewport}
            viewport={viewport}
            characterPopup={characterPopup}
            setCharacterPopup={setCharacterPopup}
          />
        );
      })}
    </MainContainer>
  );
};

export default CharacterContainer;
