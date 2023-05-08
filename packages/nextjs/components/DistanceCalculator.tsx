import React, { useState } from "react";
import google from "@types/googlemaps";
import { GoogleApiWrapper, Map, Marker, Polyline } from "google-maps-react";

interface DistanceCalculatorProps {
  google: any;
}

const DistanceCalculator: React.FC<DistanceCalculatorProps> = props => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(0);
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
  /*
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { google } = props;
    const service = new google.maps.DistanceMatrixService();
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: origin }, (results: any, status: any) => {
      if (status === "OK") {
        const originLatLng = results[0].geometry.location;
        geocoder.geocode({ address: destination }, (results: any, status: any) => {
          if (status === "OK") {
            const destinationLatLng = results[0].geometry.location;
            service.getDistanceMatrix(
              {
                origins: [originLatLng],
                destinations: [destinationLatLng],
                travelMode: google.maps.TravelMode.DRIVING,
              },
              (response: any, status: any) => {
                if (status === "OK") {
                  const distance = response.rows[0].elements[0].distance.value;
                  setDistance(distance);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(originLatLng);
                  bounds.extend(destinationLatLng);

                  if (map) {
                    map.fitBounds(bounds);

                    const pathCoordinates = [
                      { lat: originLatLng.lat(), lng: originLatLng.lng() },
                      { lat: destinationLatLng.lat(), lng: destinationLatLng.lng() },
                    ];
                    setPath(pathCoordinates);
                  }
                }
                setOriginPosition(originLatLng);
                setDestinationPosition(destinationLatLng);
                setPath([originLatLng, destinationLatLng]);
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
  */

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
                  setDistance(distance);

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

  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="origin">Origin:</label>
          <input
            id="origin"
            value={origin}
            onChange={handleOriginChange}
            placeholder="Enter origin"
            autoComplete="off"
          />
          {originSuggestions.length > 0 && (
            <ul>
              {originSuggestions.map(suggestion => (
                <li key={suggestion} onClick={() => handleOriginSelect(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter destination"
            autoComplete="off"
          />
          {destinationSuggestions.length > 0 && (
            <ul>
              {destinationSuggestions.map(suggestion => (
                <li key={suggestion} onClick={() => handleDestinationSelect(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit">Calculate distance</button>
      </form>
      {distance > 0 && (
        <div>
          <p>Distance: {distance / 1000} km</p>
        </div>
      )}
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.774929, lng: -122.419416 }}
        onReady={(mapProps: any, map: any) => setMap(map)}
      >
        {originPosition && <Marker position={originPosition} />}
        {destinationPosition && <Marker position={destinationPosition} />}
        {path && <Polyline path={path} strokeColor="#0000FF" strokeOpacity={0.8} strokeWeight={2} />}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
})(DistanceCalculator);
