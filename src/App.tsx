import React, { useState, useRef, useCallback } from "react";
import ReactMapGl, { Marker, Popup, ViewState, MapRef } from "react-map-gl";
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

import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

// eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
mapboxgl.workerClass = MapboxWorker;

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
  const mapRef = useRef<any>();

  const onSelectCity = ({
    longitude,
    latitude,
  }: {
    longitude: number;
    latitude: number;
  }) => {
    console.log(longitude, latitude);
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 2000,
      zoom: 6,
      pitch: 0,
    });
  };
  return (
    <div className="App">
      <ReactMapGl
        {...viewport}
        maxPitch={60}
        onClick={(e) => {
          const { lng, lat } = e.lngLat;
          onSelectCity({ latitude: lat, longitude: lng });
          // setViewport({ ...viewport, longitude: lng, latitude: lat, zoom: 4 });
        }}
        ref={mapRef}
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
        onSelectCity={onSelectCity}
      />
    </div>
  );
};

export default App;
