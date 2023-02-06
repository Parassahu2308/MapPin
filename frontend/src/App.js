import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MAPBOX from "../src/secret";
import { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import StarIcon from "@mui/icons-material/Star";
import "./App.css";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
    zoom: 4.5,
  });

  return (
    <div className="App">
      <Map
        initialViewState={viewport}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
          <RoomIcon
            style={{ fontSize: viewport.zoom * 7, color: "slateblue" }}
          />
        </Marker>
        {/* <Popup
          longitude={viewport.longitude}
          latitude={viewport.latitude}
          anchor="left"
          closeButton={true}
          closeOnClick={false}
        >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Delhi</h4>
            <label>Review</label>
            <p className="desc">Its a nice place</p>
            <label>Rating</label>
            <div className="stars">
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
            </div>
            <label>Information</label>
            <span className="username">
              Created by <b>Paras</b>
            </span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup> */}
      </Map>
    </div>
  );
}

export default App;
