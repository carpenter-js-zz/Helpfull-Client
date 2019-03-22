import React from "react";
import { Link } from 'react-router-dom';
import "../stylesheets/eventcard.css";

export default function EventCard(props) {
  const linkUrl = `/event/${props.event.id}`;

  if (!props.event) {
    return null;
  }

  return (
    <section className="dashboard-event-card">
      <div>
        <img className='dashboard-img' src={props.event.imgUrl} alt={props.event.name}></img>
      </div>
      <div className="event-card-content">
        <h3 className='dashboard-subtitle'>{props.event.name}</h3>
        <br></br>
        <p>{props.event.date}</p>
      </div>
      <Link to={linkUrl}>
        <button className='dashboard-button'>View Event</button>
      </Link>
    </section>
  );
}
