import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

const YOUR_API_KEY = '';

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
    ))
);

const GMap = () => {
    return (
        <div className='rounded-[1.25rem] bg-white w-full h-[18.5625rem]'>
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default GMap;
