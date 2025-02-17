import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import StoreDetails from "./StoreDetails";
import StoreLocatorMap from "./StoreLocatorMap";

interface Store {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  distance: string;
  coordinates: [number, number];
}

interface StoreLocatorProps {
  stores?: Store[];
  defaultCenter?: [number, number];
  defaultZoom?: number;
}

const StoreLocator = ({
  stores = [
    {
      id: "1",
      name: "Downtown Pharmacy",
      address: "123 Main St, Downtown, USA 12345",
      hours: "Mon-Fri: 9AM-9PM, Sat-Sun: 10AM-6PM",
      phone: "(555) 123-4567",
      distance: "0.5 miles away",
      coordinates: [40.7128, -74.006],
    },
    {
      id: "2",
      name: "Uptown Pharmacy",
      address: "456 Park Ave, Uptown, USA 12345",
      hours: "Mon-Sun: 8AM-10PM",
      phone: "(555) 987-6543",
      distance: "1.2 miles away",
      coordinates: [40.7589, -73.985],
    },
  ],
  defaultCenter = [40.7128, -74.006],
  defaultZoom = 13,
}: StoreLocatorProps) => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white p-6">
      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  className="pl-10"
                  placeholder="Search for a pharmacy location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Button>Find Nearest Location</Button>
          </div>

          <div className="relative h-[400px]">
            <StoreLocatorMap
              stores={stores}
              selectedStore={selectedStore}
              setSelectedStore={setSelectedStore}
              defaultCenter={defaultCenter}
              defaultZoom={defaultZoom}
            />
            {selectedStore && (
              <div className="absolute top-4 right-4 z-[1000]">
                <StoreDetails
                  name={selectedStore.name}
                  address={selectedStore.address}
                  hours={selectedStore.hours}
                  phone={selectedStore.phone}
                  distance={selectedStore.distance}
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stores.map((store) => (
              <Button
                key={store.id}
                variant="outline"
                className="justify-start"
                onClick={() => setSelectedStore(store)}
              >
                <MapPin className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="font-medium">{store.name}</div>
                  <div className="text-sm text-gray-500">{store.distance}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StoreLocator;
