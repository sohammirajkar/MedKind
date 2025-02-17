import React, { useEffect, useRef } from "react";
// Import leaflet from window object to avoid SSR issues
type L = typeof import("leaflet");
declare const L: L;

interface Store {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  distance: string;
  coordinates: [number, number];
}

interface StoreLocatorMapProps {
  stores: Store[];
  selectedStore: Store | null;
  setSelectedStore: (store: Store | null) => void;
  defaultCenter: [number, number];
  defaultZoom: number;
}

const StoreLocatorMap = ({
  stores,
  selectedStore,
  setSelectedStore,
  defaultCenter,
  defaultZoom,
}: StoreLocatorMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Import leaflet dynamically
    import("leaflet").then((L) => {
      // Import leaflet CSS
      import("leaflet/dist/leaflet.css");

      if (!mapRef.current || mapInstanceRef.current) return;

      // Initialize map
      const map = L.map(mapRef.current).setView(defaultCenter, defaultZoom);
      mapInstanceRef.current = map;

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Fix Leaflet default marker icon issue
      const defaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      // Add markers
      stores.forEach((store) => {
        const marker = L.marker(store.coordinates, { icon: defaultIcon }).addTo(
          map,
        ).bindPopup(`
            <div class="text-sm">
              <p class="font-semibold">${store.name}</p>
              <p>${store.address}</p>
            </div>
          `);

        marker.on("click", () => setSelectedStore(store));
      });

      // Update view when selected store changes
      if (selectedStore) {
        map.setView(selectedStore.coordinates, 15);
      }
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [stores, selectedStore, setSelectedStore, defaultCenter, defaultZoom]);

  return <div ref={mapRef} className="h-full w-full rounded-lg" />;
};

export default StoreLocatorMap;
