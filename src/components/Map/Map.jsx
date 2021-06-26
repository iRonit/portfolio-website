import React from 'react'
import GoogleMapReact from 'google-map-react'

import { FaMapMarker } from 'react-icons/fa';

import './map.css'

const LocationPin = ({ text }) => (
    <div className="pin">
        <div className="pin-icon">
            <FaMapMarker />
        </div>
        <p className="pin-text">{text}</p>
    </div>
)

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDL6bVxfSlGnZ0n7ggZnzGYsF8EF7tW6zk' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}>
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map