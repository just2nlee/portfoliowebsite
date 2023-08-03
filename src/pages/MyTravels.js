import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import React from "react";
import '../styles/MyTravels.css'

const locations = [
  { id: 1, lat: 40.7128, lng: -74.0060, description: 'New York City' },
  { id: 2, lat: 34.0522, lng: -118.2437, description: 'Los Angeles' },
  // Add more locations as needed
];

function MyTravels() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = { lat: 40.7128, lng: -74.0060 }; // Center the map on a specific location

  const [selectedLocation, setSelectedLocation] = React.useState(null);

  return (
    <div className="front-component">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelectedLocation(location)} // Set the selectedLocation state when Marker is clicked
          />
        ))}
        {selectedLocation && (
          <InfoWindow
            anchor={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} // Use the anchor prop to associate the InfoWindow with the selected Marker
            onCloseClick={() => setSelectedLocation(null)} // Clear the selectedLocation state when the InfoWindow is closed
          >
            <div>{selectedLocation.description}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default MyTravels;
