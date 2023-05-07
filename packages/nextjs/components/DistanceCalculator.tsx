import React, { useState } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

interface DistanceCalculatorProps {
  google: any;
}

const DistanceCalculator: React.FC<DistanceCalculatorProps> = props => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(0);
  const [originSuggestions, setOriginSuggestions] = useState<string[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<string[]>([]);

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

  const handleOriginSelect = (place: any) => {
    setOrigin(place);
    console.log(place);

    setOriginSuggestions([]);
  };

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

  const handleDestinationSelect = (place: any) => {
    setDestination(place);
    console.log(place);
    setDestinationSuggestions([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { google } = props;
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response: any, status: any) => {
        if (status === "OK") {
          const distance = response.rows[0].elements[0].distance.value;
          setDistance(distance);
        }
      },
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input type="text" value={origin} onChange={handleOriginChange} />
          {originSuggestions.length > 0 && (
            <ul>
              {originSuggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleOriginSelect(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </label>
        <label>
          Destination:
          <input type="text" value={destination} onChange={handleDestinationChange} />
          {destinationSuggestions.length > 0 && (
            <ul>
              {destinationSuggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleDestinationSelect(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </label>
        <button type="submit">Calculate distance</button>
      </form>
      {distance > 0 && (
        <p>
          The distance from {origin} to {destination} is {distance / 1000} km.
        </p>
      )}
      <Map google={props.google} initialCenter={{ lat: 37.7749, lng: -122.4194 }} />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
})(DistanceCalculator);
