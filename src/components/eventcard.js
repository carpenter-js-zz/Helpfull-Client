import React from "react";
import { Link } from 'react-router-dom';
import "../stylesheets/eventcard.css";

export default function EventCard(props) {
  const linkUrl = `/event/${props.event.id}`;

  if (!props.event) {
    return null;
  }

  return (
    <Link to={linkUrl}>
      <section className="dashboard-event-card">
        <div>
          <img src={props.event.imgUrl} alt={props.event.name}></img>
        </div>
        <div className="event-card-content">
          <h3>{props.event.name}</h3>
          <p>{props.event.date}</p>
          <p className='card-details'>Details:</p>
          <p>
            {props.event.description}</p>
          {/* <p>
            <i className='material-icons'>
            location_on
            </i>
            {props.event.location}
          </p>
          <p>
            <i className='material-icons'>
              person
            </i>
            {props.event.contact}
          </p> */}
        </div>
      </section>
    </Link>
  );
}
