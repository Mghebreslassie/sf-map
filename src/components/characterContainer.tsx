import { MainContainer } from "../styles/charactercontainer";
import CharacterBox from "./characterBox";
import { characterData } from "../data/data";

type IProps = {
  setCurrentMarker: React.Dispatch<React.SetStateAction<string>>;
  currentMarker: string;
};

const CharacterContainer: React.FC<IProps> = ({
  setCurrentMarker,
  currentMarker,
}) => {
  return (
    <MainContainer>
      {characterData.map((char) => {
        return (
          <CharacterBox
            char={char}
            setCurrentMarker={setCurrentMarker}
            currentMarker={currentMarker}
          />
        );
      })}
    </MainContainer>
  );
};

export default CharacterContainer;
