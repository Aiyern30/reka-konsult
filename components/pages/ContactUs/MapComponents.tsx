// components/MapComponent.tsx
"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  lat: number;
  lon: number;
}

const MapComponent = ({ lat, lon }: MapProps) => {
  useEffect(() => {
    const map = L.map("map").setView([lat, lon], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const marker = L.marker([lat, lon]);
    marker.addTo(map);

    const southWest = L.latLng(-89.98155760646617, -180);
    const northEast = L.latLng(89.99346179538875, 180);
    const bounds = L.latLngBounds(southWest, northEast);

    map.setMaxBounds(bounds);

    map.on("drag", function () {
      map.panInsideBounds(bounds, { animate: false });
    });

    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return (
    <div
      id="map"
      style={{
        height: "600px",
        width: "100%",
        position: "relative",
        zIndex: 0,
      }}
    ></div>
  );
};

export default MapComponent;
