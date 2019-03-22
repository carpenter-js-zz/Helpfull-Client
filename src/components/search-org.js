import React from "react";
import { InitialMap, LoadingMap } from "./map";
import "../stylesheets/search-org.css";
import { Link } from "react-router-dom";

export default function SearchOrg(props) {

    if (props.orgs) {
        const listNames = props.orgs.map((org, index) => {
            const linkUrl = `/organization/${org.id}`;
            return (
                <Link key={index} to={linkUrl}>
                    <section className='card'>
                        <div className='search-column'>
                            <div>
                                <span className='search-title'>{org.name}</span>
                                <p className='search-description'>{org.description}</p>
                            </div>
                            <div className='customHr'></div>
                            <div className='search-info'>
                                <div><span>Where:</span> {org.location}</div>
                                <div><span>Contact us:</span> {org.contact}</div>
                            </div>
                        </div>
                    </section>
                </Link>
            );
        });

        return (
            <section>
                <InitialMap
                    location={props.location}
                    markers={props.orgs}
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <h3>{listNames}</h3>
            </section>
        );
    } else {
        return (
            <section>
                <LoadingMap
                    location={{ lat: -25.363, lng: 131.044 }}
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </section>
        );
    }

}
