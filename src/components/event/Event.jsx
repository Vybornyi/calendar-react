import React from 'react';

import './event.scss';

const Event = ({ key, height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  console.log(key);

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button className="event__delete-btn">+</button>
    </div>
  );
};

export default Event;
