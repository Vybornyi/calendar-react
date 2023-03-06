import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './eventInfo.scss';
import { closeEventInfo } from '../../redux/eventsSlice';
import { getTimeDifferenceInfo } from '../../utils/dateUtils';

const EventInfo = () => {
  const dispatch = useDispatch();
  const event = useSelector(state => state.events.eventInfo);
  const { date, description, eventEnd, eventStart, title } = event[0];
  const eventDiffInfo = getTimeDifferenceInfo(date, eventStart);

  return (
    <div className="event-info overlay">
      <div className="event-info__content">
        <button onClick={() => dispatch(closeEventInfo())} className="event-info__close-btn">
          +
        </button>
        <h4 className="event-info__title">{title}</h4>
        <span className="event-info__time">{`${eventStart}-${eventEnd}`}</span>
        <span className="event-info__time">{eventDiffInfo}</span>
        <p className="event-info__description">{description}</p>
      </div>
    </div>
  );
};

export default EventInfo;
