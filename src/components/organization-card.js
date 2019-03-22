import React, { useState, useEffect } from "react";
import "../stylesheets/org-card.css";
import { Link } from "react-router-dom";

export default function OrganizationCard(props) {
    const [link, setLink] = useState(`/organization/${props.org.id}`);


    const checkAdmin = () => {
        if (props.admin) {
            setLink(`/orgdashboard/${props.org.id}`);
        }
    };


    useEffect(() => {
        checkAdmin();
    }, []);

    if (!props.org) {
        return "Loading...";
    }

    return (

        <section className="org-card">

            <div className="org-card-content">
                <Link to={link}>
                    <div>
                        <img className='dashboard-img' src={props.org.imgUrl} alt={props.org.name}></img>
                    </div>
                    <h3>{props.org.name}</h3>

                    {/* <p className='card-details'>Details:</p>
                <p>{props.org.description}</p> */}
                    {/* <p>
                    <i className='material-icons'>
                        location_on
                    </i>
                    {props.org.location}
                </p>
                <p>
                    <i className='material-icons'>
                        person
                    </i>
                    {props.org.contact}
                </p> */}
                </Link>
            </div>
        </section >

    );
}
