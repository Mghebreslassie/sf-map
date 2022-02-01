import { useState } from "react";
import ReactMapGl, { Marker, ViewportProps, Popup } from "react-map-gl";
import { Room } from "@material-ui/icons";
const App: React.FC = () => {
  const [showPopup, togglePopup] = useState(false);
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
        onClick={(e) => {
          const [longitude, latitude] = e.lngLat;
          setViewport({ ...viewport, longitude, latitude, zoom: 4 });
        }}
        onViewportChange={(e: ViewportProps) => setViewport(e)}
        mapStyle={"mapbox://styles/modiggs23/ckyxq66wb001n14nl92hsfekx"}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_API}
      >
        <Marker latitude={48.85} longitude={2.29}>
          <Room onClick={() => togglePopup(true)} />
        </Marker>
        {showPopup && (
          <Popup
            latitude={48.85}
            longitude={2.29}
            closeButton={true}
            closeOnClick={false}
            onClose={() => togglePopup(false)}
            anchor="top"
          >
            <div>You are here</div>
          </Popup>
        )}
      </ReactMapGl>
    </div>
  );
};

export default App;
