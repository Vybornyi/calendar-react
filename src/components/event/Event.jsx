import React from 'react';
import { useDispatch } from 'react-redux';
import './event.scss';
import PropTypes from 'prop-types';
import { deleteEvent, showEventInfo } from '../../redux/eventsSlice.js';

const Event = ({ id, height, marginTop, title, time }) => {
  const dispatch = useDispatch();
  const eventStyle = {
    height,
    marginTop,
  };
  const handleDelete = () => {
    dispatch(deleteEvent(id));
  };

  return (
    <>
      <div
        onClick={e => {
          if (e.target.getAttribute('datatype') === 'event') {
            console.log(e.target.getAttribute('datatype'));
            dispatch(showEventInfo(id));
          }
        }}
        style={eventStyle}
        className="event"
        datatype="event"
      >
        <div className="event__title" datatype="event">
          {title}
        </div>
        <div className="event__time" datatype="event">
          {time}
        </div>
        <button onClick={handleDelete} className="event__delete-btn">
          +
        </button>
      </div>
    </>
  );
};
Event.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default Event;
