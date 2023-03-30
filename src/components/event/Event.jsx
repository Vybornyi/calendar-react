import React from 'react';
import { useDispatch } from 'react-redux';
import './event.scss';
import PropTypes from 'prop-types';
import { deleteEvent, showEventInfo } from '../../redux/eventsSlice.js';
import { getHeightEvent } from '../../../src/utils/dateUtils.js';
import moment from 'moment';
import DeleteIcon from '../../icons/DeleteIcon';

const Event = ({ event }) => {
  const { id, eventStart, eventEnd, title } = event;
  const timeInfo = `${eventStart} - ${eventEnd}`;
  const dispatch = useDispatch();

  const eventStyle = {
    height: getHeightEvent(eventStart, eventEnd),
    marginTop: moment(eventStart, 'HH:mm').format('mm'),
  };

  const handleDelete = () => {
    dispatch(deleteEvent(id));
  };

  return (
    <>
      <div
        onClick={e => {
          if (e.target.getAttribute('datatype') === 'event') {
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
          {timeInfo}
        </div>
        <button onClick={handleDelete} className="event__delete-btn">
          <DeleteIcon className="event__delete-icon" />
        </button>
      </div>
    </>
  );
};
Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
