import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './eventInfo.scss';
import { closeEventInfo, deleteEvent } from '../../redux/eventsSlice';
import { getTimeDifferenceInfo } from '../../utils/dateUtils';
import CloseIcon from '../../icons/CloseIcon';
import DeleteIcon from '../../icons/DeleteIcon';
import EditIcon from '../../icons/EditIcon';

const EventInfo = () => {
  const dispatch = useDispatch();
  const event = useSelector(state => state.events.eventInfo);
  const { date, description, eventEnd, eventStart, title, id } = event[0];
  const eventDiffInfo = getTimeDifferenceInfo(date, eventStart);

  return (
    <div className="event-info overlay">
      <div className="event-info__content">
        <div className="event-info__buttons-block">
          <button
            onClick={() => {
              dispatch(closeEventInfo());
              dispatch(deleteEvent(id));
            }}
            className="event-info__delete-btn event-info__btn"
          >
            <DeleteIcon />
          </button>
          <button
            onClick={() => dispatch(closeEventInfo())}
            className="event-info__close-btn event-info__btn"
          >
            <CloseIcon />
          </button>
        </div>

        <h4 className="event-info__title">{title}</h4>
        <span className="event-info__time">{`${eventStart}-${eventEnd}`}</span>
        <span className="event-info__time">{eventDiffInfo}</span>
        <p className="event-info__description">{description}</p>
      </div>
    </div>
  );
};

export default EventInfo;
