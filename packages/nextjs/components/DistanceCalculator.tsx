import React, { useState } from "react";
import OffsetHelper from "./OffsetHelper";
import ToucanSDK from "./ToucanSDK";
import google from "@types/googlemaps";
import { GoogleApiWrapper, Map, Marker, Polyline } from "google-maps-react";

interface DistanceCalculatorProps {
  google: any;
}

const DistanceCalculator: React.FC<DistanceCalculatorProps> = props => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(1);
  const [distanceDisplay, setDistanceDisplay] = useState(0);

  const [originSuggestions, setOriginSuggestions] = useState<string[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<string[]>([]);
  const [map, setMap] = useState<any>(null);
  const [originPosition, setOriginPosition] = useState<any>(null);
  const [destinationPosition, setDestinationPosition] = useState<any>(null);
  const [path, setPath] = useState<any>(null);

  const handleOriginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value);
    if (event.target.value) {
      const service = new props.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        {
          input: event.target.value,
        },
        (predictions: any) => {
          const suggestions = predictions.map((prediction: any) => prediction.description);
          setOriginSuggestions(suggestions);
        },
      );
    } else {
      setOriginSuggestions([]);
    }
  };

  const handleOriginSelect = (place: google.maps.places.PlaceResult) => {
    setOrigin(place);
    console.log(place);
    setOriginSuggestions([]);
  };

  //   const handleOriginSelect = (place: google.maps.places.PlaceResult) => {
  //     setOrigin(place.formatted_address);
  //     setOriginSuggestions([]);
  //   };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
    if (event.target.value) {
      const service = new props.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        {
          input: event.target.value,
        },
        (predictions: any) => {
          const suggestions = predictions.map((prediction: any) => prediction.description);
          setDestinationSuggestions(suggestions);
        },
      );
    } else {
      setDestinationSuggestions([]);
    }
  };

  const handleDestinationSelect = (place: google.maps.places.PlaceResult) => {
    setDestination(place);
    console.log(place);
    setDestinationSuggestions([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { google } = props;
    const directionsService = new google.maps.DirectionsService();
    const distanceService = new google.maps.DistanceMatrixService();
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: origin }, (results: any, status: any) => {
      if (status === "OK") {
        const originLatLng = results[0].geometry.location;
        geocoder.geocode({ address: destination }, (results: any, status: any) => {
          if (status === "OK") {
            const destinationLatLng = results[0].geometry.location;
            directionsService.route(
              {
                origin: originLatLng,
                destination: destinationLatLng,
                travelMode: google.maps.TravelMode.DRIVING,
              },
              (response: any, status: any) => {
                if (status === "OK") {
                  const distance = response.routes[0].legs[0].distance.value;
                  setDistance(Math.ceil(distance / 1000));
                  setDistanceDisplay(Math.ceil(distance / 1000));

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(originLatLng);
                  bounds.extend(destinationLatLng);

                  if (map) {
                    map.fitBounds(bounds);

                    const pathCoordinates = response.routes[0].overview_path.map((location: any) => {
                      return { lat: location.lat(), lng: location.lng() };
                    });
                    setPath(pathCoordinates);
                  }
                }
                setOriginPosition(originLatLng);
                setDestinationPosition(destinationLatLng);
              },
            );
          } else {
            setDistance(0);
            if (map) {
              setOriginPosition(null);
              setDestinationPosition(null);
              setPath(null);
            }
          }
        });
      } else {
        setDistance(0);
        if (map) {
          setOriginPosition(null);
          setDestinationPosition(null);
          setPath(null);
        }
      }
    });
  };

  //   const mapStyles = {
  //     width: "100%",
  //     height: "400px",
  //   };

  interface IMapProps {
    google: any;
    zoom: number;
    style?: React.CSSProperties;
    initialCenter?: google.maps.LatLngLiteral;
    center?: google.maps.LatLngLiteral;
    onReady?: (mapProps: any, map: any) => void;
  }

  return (
    <div className="w-1800px mx-auto p-4 bg-white rounded-lg shadow-lg">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700" htmlFor="origin">
            Origin:
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            id="origin"
            value={origin}
            onChange={handleOriginChange}
            placeholder="Enter origin"
            autoComplete="off"
          />
          {originSuggestions.length > 0 && (
            <ul className="bg-white border rounded-md shadow-lg text-gray-700 text-xs">
              {originSuggestions.map(suggestion => (
                <li
                  key={suggestion}
                  onClick={() => handleOriginSelect(suggestion)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700" htmlFor="destination">
            Destination:
          </label>
          <input
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter destination"
            autoComplete="off"
          />
          {destinationSuggestions.length > 0 && (
            <ul className="bg-white border rounded-md shadow-lg text-gray-700 text-xs">
              {destinationSuggestions.map(suggestion => (
                <li
                  key={suggestion}
                  onClick={() => handleDestinationSelect(suggestion)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full lg:w-1/2 mx-auto px-4 py-2 text-white bg-primary rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Calculate distance
          </button>
        </div>
      </form>
      {distance > 0 && (
        <div className="mt-4">
          <p className="text-lg font-medium text-gray-700">Ride distance: {distanceDisplay} km</p>
        </div>
      )}
      <div className="h-96 w-full mx-auto relative flex flex-col py-6">
        <Map
          google={props.google}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
          initialCenter={{ lat: 37.774929, lng: -122.419416 }}
          onReady={(mapProps: any, map: any) => setMap(map)}
        >
          {originPosition && <Marker position={originPosition} />}
          {destinationPosition && <Marker position={destinationPosition} />}
          {path && <Polyline path={path} strokeColor="var(--primary)" strokeOpacity={0.8} strokeWeight={3} />}
        </Map>
      </div>
      {/* <ToucanSDK distance={distance} /> */}
      <OffsetHelper distance={distance} />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
})(DistanceCalculator);
