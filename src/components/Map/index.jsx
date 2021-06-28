import React, { useState } from 'react'
import ReactMapGL, { FlyToInterpolator, NavigationControl, Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { FaMale, FaBriefcase, FaGlobeAsia } from 'react-icons/fa';
import {
    SocialSitesContent,
    SocialSiteIcons,
    SocialSiteIcon
} from './MapElements';

const Map = () => {

    // Some issue
    // eslint-disable-next-line import/no-webpack-loader-syntax
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

    const workBaseLoc = {
        text: "Headquarter",
        la: 12.936038361862003,
        lg: 77.69607765236333
    }

    const currentLoc = {
        text: "Working From Home",
        la: 27.052575,
        lg: 88.469082
    }

    const [viewport, setViewport] = useState({
        width: "100%",
        height: 400,
        latitude: currentLoc.la,
        longitude: currentLoc.lg,
        zoom: 8
    });

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
        zoom: 3,
        transitionDuration: 2000
    })

    const navControlStyle = {
        right: 10,
        top: 10
    };

    return (
        <>
            <div>
                <ReactMapGL mapboxApiAccessToken='pk.eyJ1IjoiaXJvbml0IiwiYSI6ImNrcWYxMGdsYjBpMHUydm5uYno3a254bDEifQ.hfY2_xkZZajjAK4s3cvSLQ'
                    {...viewport}
                    mapStyle='mapbox://styles/mapbox/streets-v11'
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                >
                    <NavigationControl style={navControlStyle} />
                    <Marker latitude={workBaseLoc.la} longitude={workBaseLoc.lg} offsetLeft={-12} offsetTop={-32}>
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                    </Marker>
                    <Marker latitude={currentLoc.la} longitude={currentLoc.lg} offsetLeft={-12} offsetTop={-32}>
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                    </Marker>

                    <SocialSitesContent>
                        <SocialSiteIcons>
                            <SocialSiteIcon>
                                <div onClick={() => goToLoc(currentLoc)}>
                                    <FaMale color="white" size="2em" title="Current"/>
                                </div>
                            </SocialSiteIcon>
                            <SocialSiteIcon>
                                <div onClick={() => goToLoc(workBaseLoc)}>
                                    <FaBriefcase color="white" size="2em" />
                                </div>
                            </SocialSiteIcon>
                            <SocialSiteIcon>
                                <div onClick={zoomOut}>
                                    <FaGlobeAsia color="white" size="2em" />
                                </div>
                            </SocialSiteIcon>
                        </SocialSiteIcons>
                    </SocialSitesContent>
                </ReactMapGL>
            </div>
        </>
    )
}

export default Map
