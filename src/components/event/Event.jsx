import React from 'react';
import { deleteTask } from '../../gateway/events';
import './event.scss';
import PropTypes from 'prop-types';

const Event = ({ id, height, marginTop, title, time, fetchEvents }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const handleDelete = () => {
    deleteTask(id).then(() => {
      fetchEvents();
    });
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
Event.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};
export default Event;
