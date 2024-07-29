import mapboxgl from 'mapbox-gl';
import React, { useState } from 'react';
import { FaBriefcase, FaGlobeAsia, FaMale } from 'react-icons/fa';
import ReactMapGL, { FlyToInterpolator, Marker, NavigationControl } from 'react-map-gl';
import {
    MarkerMenuContent, MarkerMenuIcon, MarkerMenuIcons
} from './MapElements';

const Map = () => {

    // Some issue while transpiling, so:
    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

    // -------------Location Markers-------------
    const workBaseLoc = {
        text: "Headquarter",
        la: 12.936038361862003,
        lg: 77.69607765236333
    };

    const currentLoc = {
        text: "Working From Home",
        la: 27.052575,
        lg: 88.469082
    };
    // -------------------------------------------

    // -----------ViewPort and Settings-----------
    const [viewport, setViewport] = useState({
        width: "100%",
        height: 400,
        latitude: currentLoc.la,
        longitude: currentLoc.lg,
        zoom: 8
    });

    const [settings, setsettings] = useState({
        scrollZoom: false,
        keyboard: false
    });

    const navControlStyle = {
        right: 10,
        top: 10
    };
    // -------------------------------------------

    const goToLoc = (loc) => {
        setViewport({
            ...viewport,
            longitude: loc.lg,
            latitude: loc.la,
            zoom: 8,
            transitionDuration: 4000,
            transitionInterpolator: new FlyToInterpolator()
        });
    };

    const zoomOut = () => setViewport({
        ...viewport,
        zoom: 1.5,
        transitionDuration: 2000
    })

    return (
        <>
            <div>
                <ReactMapGL mapboxApiAccessToken= {process.env.MAP_API_KEY}
                    {...viewport}
                    {...settings}
                    mapStyle='mapbox://styles/mapbox/streets-v11'
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                >
                    <NavigationControl style={navControlStyle} />
                    <Marker latitude={workBaseLoc.la} longitude={workBaseLoc.lg} offsetLeft={-12} offsetTop={-32}>
                        <i className="fas fa-map-marker-alt fa-2x"></i>
                    </Marker>
                    <Marker latitude={currentLoc.la} longitude={currentLoc.lg} offsetLeft={-12} offsetTop={-32}>
                        <i className="fas fa-map-marker-alt fa-2x"></i>
                    </Marker>
                    <MarkerMenuContent>
                        <MarkerMenuIcons>
                            <MarkerMenuIcon>
                                <div onClick={() => goToLoc(currentLoc)}>
                                    <FaMale color="white" size="2em" title="Current" />
                                </div>
                            </MarkerMenuIcon>
                            <MarkerMenuIcon>
                                <div onClick={() => goToLoc(workBaseLoc)}>
                                    <FaBriefcase color="white" size="2em" />
                                </div>
                            </MarkerMenuIcon>
                            <MarkerMenuIcon>
                                <div onClick={zoomOut}>
                                    <FaGlobeAsia color="white" size="2em" />
                                </div>
                            </MarkerMenuIcon>
                        </MarkerMenuIcons>
                    </MarkerMenuContent>
                </ReactMapGL>
            </div>
        </>
    )
}

export default Map;
