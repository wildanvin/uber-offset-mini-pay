import React from "react";

interface IMapProps {
  google: any;
  zoom: number;
  style: React.CSSProperties;
  initialCenter: { lat: number; lng: number };
  onReady: (mapProps: any, map: any) => void;
  children?: React.ReactNode;
}

// assuming the interface is defined in a separate file

const Map: React.FC<IMapProps> = props => {
  const { google, zoom, style, initialCenter, onReady, children } = props;

  return (
    <div>
      {/* Your map implementation here */}
      {children}
    </div>
  );
};

export default Map;
