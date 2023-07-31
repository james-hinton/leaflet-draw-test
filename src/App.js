import React, { useRef } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import stacLayer from "stac-layer"; // This conflicts with react-leaflet-draw, comment this out to see that the draw tools are working

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

function App() {
  const mapRef = useRef(null);

  return (
    <div className="App">
      <h1>Leaflet Draw and STAC Layer Conflict</h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              rectangle: true,
              polyline: false,
              polygon: false,
              circle: false,
              marker: false,
              circlemarker: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
}

export default App;
