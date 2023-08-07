import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import React from "react";
import '../styles/MyTravels.css';

const locations = [
  { id: 1, lat: 38.7223, lng: -9.1393, description: 'Lisbon, Portugal' }, // Add Lisbon location
  // Add more locations as needed
];

function MyTravels() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = { lat: 38.7223, lng: -9.1393 }; // Center the map on a specific location

  const [selectedLocation, setSelectedLocation] = React.useState(null);

  const redMarkerIcon = {
    url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    scaledSize: new window.google.maps.Size(32, 32), // Adjust the size of the icon
  };

  return (
    <div className="front-component">
      <p1 className = "info">Hi this is where I'll be updating info on my backpacking journey through Europe this fall!</p1>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelectedLocation(location)} // Set the selectedLocation state when Marker is clicked
            icon={redMarkerIcon} // Use the custom icon for the marker
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
