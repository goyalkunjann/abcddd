'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Create a custom divIcon with FontAwesome HTML
const customIcon = L.divIcon({
  html: '<i class="fa-solid fa-location-dot" style="font-size: 24px; color: red;"></i>',
  iconSize: [24, 24],
  className: 'custom-marker-icon' // Optionally, you can add a custom class for additional styling
});

const House8 = () => {
  return (
    <div className="map-container-small">
      <MapContainer
        center={[28.459497, 77.026638]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[28.459497, 77.026638]} icon={customIcon}>
          <Popup>
            Here is the location of our office.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default House8;
