import { Box } from "@chakra-ui/react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import MapCarousel from "./MapCarousel/MapCarousel";
import { CloseIcon } from "@chakra-ui/icons";

const PropertyMapView = ({openView}) => {
  const OPTIONS = {
    minZoom: 10,
    maxZoom: 18,
    fullscreenControl: false,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY1,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return isLoaded ? (
    <>
      <Box
        className="map-toggle-container"
        gap={5}
        display={{ sm: "block", md: "flex" }}
      >
        <Box
          className="close-map-container" 
          as="span"
          onClick={() => openView("list")}
        >
          <CloseIcon boxSize={3} />
        </Box>
        <GoogleMap
          options={OPTIONS}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={20}
          onLoad={onLoad}
          onUnmount={onUnmount}
          className="map-view-section"
        >
          <Marker position={center} />
        </GoogleMap>
        <MapCarousel />
      </Box>
    </>
  ) : <></>
}

export default PropertyMapView;
