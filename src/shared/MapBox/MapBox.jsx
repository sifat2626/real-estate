/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function MapBox({ position, location }) {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-screen w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapBox;
