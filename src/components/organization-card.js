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

                <div>
                    <img className='dashboard-img' src={props.org.imgUrl} alt={props.org.name}></img>
                </div>
                <h3 className='dashboard-subtitle'>{props.org.name}</h3>
            </div>
            <Link to={link}>
                <button className='dashboard-button'>View Organization</button>
            </Link>
        </section >

    );
}
