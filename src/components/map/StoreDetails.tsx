import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

interface StoreDetailsProps {
  name?: string;
  address?: string;
  hours?: string;
  phone?: string;
  distance?: string;
  directions?: string;
}

const StoreDetails = ({
  name = "MedKind Pharmacy",
  address = "Shop No.7, ground floor, Laxmi Anand Villa CHS, Phadke Rd, Opposite Modern Cafe, Dombivali East",
  hours = "Mon-Fri: 9AM-9PM, Sat-Sun: 10AM-6PM",
  phone = "+91 7757878121",
  distance = "0.5 miles away",
  directions = "https://maps.google.com",
}: StoreDetailsProps) => {
  return (
    <Card className="w-[400px] p-6 bg-white shadow-lg">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{distance}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-sm text-gray-600">{address}</p>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-sm text-gray-600">{hours}</p>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-sm text-gray-600">{phone}</p>
          </div>
        </div>

        <div className="pt-4">
          <Button
            className="w-full"
            onClick={() => window.open(directions, "_blank")}
          >
            Get Directions
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default StoreDetails;
