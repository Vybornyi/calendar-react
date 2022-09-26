import React from 'react';
import events from '../../gateway/events.js';
import './event.scss';

const Event = ({ id, height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const handleDelete = () => {
    console.log(events);
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button onClick={handleDelete} className="event__delete-btn">
        +
      </button>
    </div>
  );
};

export default Event;
