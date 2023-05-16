import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '450px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    const OPTIONS = {
        minZoom: 10,
        maxZoom: 18,
      }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY1,
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    

    return isLoaded ? (
        <GoogleMap
            options = {OPTIONS}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
            className="map-section"
        >
            <Marker position={center} />
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)