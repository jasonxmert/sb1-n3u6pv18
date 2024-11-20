"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Building2, Globe2, MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  location: any;
}

export default function LocationDialog({ isOpen, onClose, location }: LocationDialogProps) {
  if (!location) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <MapIcon className="h-5 w-5" />
            Location Details
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg backdrop-blur-sm">
            <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-red-500" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{location.places[0]["place name"]}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {location.places[0].state} {location.places[0]["state abbreviation"]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Postal Code</span>
              </div>
              <p className="text-sm pl-6 text-gray-600 dark:text-gray-400">{location["post code"]}</p>
            </div>

            <div className="space-y-2 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Country</span>
              </div>
              <p className="text-sm pl-6 text-gray-600 dark:text-gray-400">
                {location.country} ({location["country abbreviation"]})
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg backdrop-blur-sm">
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Coordinates</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Latitude</span>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{location.places[0].latitude}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Longitude</span>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{location.places[0].longitude}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white border-none"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}