"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { name: "Ahmedabad", coords: [23.0225, 72.5714] },
  { name: "Jamshedpur", coords: [22.8046, 86.2029] },
  { name: "Aurangabad", coords: [19.8762, 75.3433] },
  { name: "Kerala (Kochi)", coords: [9.9312, 76.2673] },
  { name: "Bhubaneswar", coords: [20.2961, 85.8245] },
  { name: "Kolhapur", coords: [16.705, 74.2433] },
  { name: "Bangalore", coords: [12.9716, 77.5946] },
  { name: "Kodaikanal", coords: [10.2381, 77.4893] },
  { name: "Bilaspur", coords: [22.0796, 82.1391] },
  { name: "Lucknow", coords: [26.8467, 80.9462] },
  { name: "Burdwan", coords: [23.2324, 87.8614] },
  { name: "Mysore", coords: [12.2958, 76.6394] },
  { name: "Chennai", coords: [13.0827, 80.2707] },
  { name: "Mumbai", coords: [19.076, 72.8777] },
  { name: "Coimbatore", coords: [11.0168, 76.9558] },
  { name: "Mangalore", coords: [12.9141, 74.856] },
  { name: "Cochin", coords: [9.9312, 76.2673] },
  { name: "Nagpur", coords: [21.1458, 79.0882] },
  { name: "Dehradun", coords: [30.3165, 78.0322] },
  { name: "Pune", coords: [18.5204, 73.8567] },
  { name: "Delhi", coords: [28.7041, 77.1025] },
  { name: "Jaipur", coords: [26.9124, 75.7873] },
  { name: "Indore", coords: [22.7196, 75.8577] },
  { name: "Daman", coords: [20.3977, 72.832] },
  { name: "Thiruvananthapuram", coords: [8.5241, 76.9366] },
  { name: "Puducherry", coords: [11.9416, 79.8083] },
  { name: "Vijayawada", coords: [16.5062, 80.648] },
  { name: "Hyderabad", coords: [17.4065, 78.4772] },
  { name: "Visakhapatnam", coords: [17.6868, 83.2185] },
  { name: "Raipur", coords: [21.2514, 81.6296] },
  { name: "Ranchi", coords: [23.3441, 85.3096] },
  { name: "Dhanbad", coords: [23.7957, 86.4304] },
  { name: "Patna", coords: [25.5941, 85.1376] },
  { name: "Haldia", coords: [22.0627, 88.0833] },
  { name: "Siliguri", coords: [26.7271, 88.3953] },
  { name: "Guwahati", coords: [26.1158, 91.7086] },
  { name: "Kathmandu", coords: [27.7103, 85.3222] },
  { name: "Thimpu", coords: [27.4716, 89.6386] },
];

export default function MapPage() {
  useEffect(() => {
    // Initialize map
    const map = L.map("map").setView([22.0, 82.0], 5);

    // Restrict panning to world bounds
    map.setMaxBounds([
      [-90, -180],
      [90, 180],
    ]);

    // Add basemap
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      noWrap: true, // prevent multiple worlds
    }).addTo(map);

    // Red marker icon
    const redIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Add markers (no clustering)
    const markerList = [];
    locations.forEach((loc) => {
      const marker = L.marker(loc.coords, { icon: redIcon }).bindPopup(
        `<b>${loc.name}</b>`
      );
      marker.addTo(map);
      markerList.push(marker);
    });

    // Fit map to show all markers
    if (markerList.length > 0) {
      const group = L.featureGroup(markerList);
      map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }

    // Cleanup
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" className="w-full md:h-[600px] h-[500px] relative rounded-3xl mt-10" />
  );
}
