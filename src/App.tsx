import React, { useState } from "react";
import ReactMapGl, {
  Marker,
  ViewportProps,
  Popup,
  FlyToInterpolator,
} from "react-map-gl";
import { Room } from "@material-ui/icons";
import { characterData } from "./data/data";
import {
  BottomDiv,
  CharacterAvatar,
  ImageContainer,
  MainContainer,
  TextContainer,
  TopDiv,
} from "./styles/characterinfostyle";
import CharacterContainer from "./components/characterContainer";

const App: React.FC = () => {
  const [currentMarker, setCurrentMarker] = useState("");
  const [charObjs] = useState(characterData);
  const [showPopup, togglePopup] = useState(true);
  const [characterPopup, setCharacterpopup] = useState(characterData[0]);
  const [viewport, setViewport] = useState<ViewportProps>({
    width: 1000,
    height: 1000,
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  return (
    <div className="App">
      <ReactMapGl
        {...viewport}
        transitionDuration={1000}
        transitionInterpolator={new FlyToInterpolator()}
        onClick={(e) => {
          const [longitude, latitude] = e.lngLat;
          setViewport({ ...viewport, longitude, latitude, zoom: 4 });
        }}
        onViewportChange={(e: ViewportProps) => setViewport(e)}
        mapStyle={"mapbox://styles/modiggs23/ckyxq66wb001n14nl92hsfekx"}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_API}
      >
        {charObjs.map((char, index) => {
          return (
            <div key={char.id}>
              <Marker latitude={char.lat} longitude={char.lon}>
                <Room
                  style={{
                    fill: currentMarker === char.name ? "gold" : "black",
                  }}
                  onClick={() => {
                    setCharacterpopup(char);
                    togglePopup(true);
                  }}
                />
              </Marker>
            </div>
          );
        })}
        {showPopup && (
          <Popup
            latitude={characterPopup.lat}
            longitude={characterPopup.lon}
            closeButton={true}
            closeOnClick={false}
            onClose={() => togglePopup(false)}
            anchor="top"
          >
            <MainContainer>
              <TopDiv>
                <h5>Birthplace: {characterPopup.country}</h5>
              </TopDiv>
              <BottomDiv>
                <ImageContainer>
                  <CharacterAvatar
                    src={require(`./assets/3rdstrike/${characterPopup.image}`)}
                    alt=""
                  />
                </ImageContainer>
                <TextContainer>
                  <h4>
                    <span style={{ float: "left" }}>Name: </span>
                    {characterPopup.name}
                  </h4>
                  <h4>
                    <span style={{ float: "left" }}>Age: </span>
                    {characterPopup.age}
                  </h4>
                  <p>"{characterPopup.description}"</p>
                </TextContainer>
              </BottomDiv>
            </MainContainer>
          </Popup>
        )}
      </ReactMapGl>
      <CharacterContainer
        setCurrentMarker={setCurrentMarker}
        currentMarker={currentMarker}
        setViewport={setViewport}
        viewport={viewport}
        characterPopup={characterPopup}
        setCharacterPopup={setCharacterpopup}
      />
    </div>
  );
};

export default App;
