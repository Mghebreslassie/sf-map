import React, { useState } from "react";
import ReactMapGl, { Marker, Popup, ViewState } from "react-map-gl";
import { Room } from "@material-ui/icons";
import { characterData } from "./data/data";
import "mapbox-gl/dist/mapbox-gl.css";
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
  const [viewport, setViewport] = useState<ViewState>({
    latitude: 0,
    longitude: 0,
    zoom: 2,
    bearing: 0,
    pitch: 0,
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  });

  return (
    <div className="App">
      <ReactMapGl
        {...viewport}
        onClick={(e) => {
          const { lng, lat } = e.lngLat;
          setViewport({ ...viewport, longitude: lng, latitude: lat, zoom: 4 });
        }}
        onMove={(e) => setViewport(e.viewState)}
        style={{ width: "100vw", height: "500px" }}
        mapStyle={"mapbox://styles/modiggs23/ckyxq66wb001n14nl92hsfekx"}
        mapboxAccessToken={process.env.REACT_APP_MAP_API}
      >
        {charObjs.map((char) => {
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
