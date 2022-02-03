import { MainContainer } from "../styles/charactercontainer";
import CharacterBox from "./characterBox";
import { characterData } from "../data/data";

const CharacterContainer: React.FC = () => {
  return (
    <MainContainer>
      {characterData.map((char) => {
        return <CharacterBox char={char} />;
      })}
    </MainContainer>
  );
};

export default CharacterContainer;
