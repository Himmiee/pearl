"use client";

import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

type ContactMapProps = {
  lat: number;
  lng: number;
  zoom: number;
  className?: string; // Optional custom class for styling
  location?: string;  // Optional location text for the popup
};

const ContactMap = ({
  lat,
  lng,
  zoom,
  className = "",
  location = "You are here!",
}: ContactMapProps) => {
  const mapRef = useRef<boolean | null>(null); // Reference to the map container to avoid reinitialization

  useEffect(() => {
    // Ensure the code is running on the client side
    if (typeof window === "undefined") return;

    // Avoid multiple initialization
    if (mapRef.current) {
      // Prevent reinitialization by skipping this logic
      return;
    }

    mapRef.current = true; // Mark as initialized
  }, []);

  const customIcon = new Icon({
    iconUrl: "/images/marker.png",
    iconSize: [38, 38],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  return (
    <div className={`w-full h-[604px] ${className}`}>
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{location}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
