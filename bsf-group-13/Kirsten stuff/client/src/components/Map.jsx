import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from '../components/LocationPin'
import '../components/Map.css'

  const Map = ({ location, zoomLevel }) => {
    return(
        <>
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Office</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDWmKX3PaNEHA3JU1F1i2TWFcvIa0h1TRk' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
    </>
  )
}
export default Map;