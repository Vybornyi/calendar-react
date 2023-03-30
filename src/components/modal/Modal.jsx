import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../redux/eventsSlice';
import { showNotification } from '../../redux/notificationSlice.js';
import { closeModalForm } from '../../redux/calendarSlice.js';
import { validateNewEvent } from '../../utils/dateUtils.js';
import './modal.scss';
import moment from 'moment';
import CloseIcon from '../../icons/CloseIcon';

const Modal = () => {
  const dispatch = useDispatch();
  const eventStartTime = useSelector(state => state.calendar.eventStartTime);
  const eventEndTime = useSelector(state => state.calendar.eventEndTime);
  const eventDate = useSelector(state => state.calendar.eventStartDate);
  const events = useSelector(state => state.events.eventsList);

  const [formInfo, setFormInfo] = useState({
    title: '',
    date: eventDate,
    eventStart: eventStartTime,
    eventEnd: eventEndTime,
    description: '',
  });

  const { title, date, eventStart, eventEnd, description } = formInfo;

  const handleChange = e => {
    const { value, name } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const response = validateNewEvent(eventStart, eventEnd, date, events);
    if (response.type !== 'success') {
      dispatch(showNotification(response));
      return;
    }

    const newEvent = {
      title: title === '' ? 'No title' : title,
      description,
      eventStart,
      eventEnd:
        eventStart === eventEnd ? moment(eventEnd, 'HH:mm').add(15, 'm').format('HH:mm') : eventEnd,
      date,
    };
    dispatch(createEvent(newEvent));
    dispatch(closeModalForm());
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={() => dispatch(closeModalForm())} className="create-event__close-btn">
            <CloseIcon className="create-event__close-icon" />
          </button>

          <form onSubmit={handleSubmit} className="event-form">
            <input
              onChange={handleChange}
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              required
            />
            <div className="event-form__time">
              <input
                onChange={handleChange}
                value={date}
                type="date"
                name="date"
                className="event-form__field"
                required
              />
              <input
                onChange={handleChange}
                value={eventStart}
                type="time"
                name="eventStart"
                className="event-form__field"
                required
              />
              <span>-</span>
              <input
                onChange={handleChange}
                value={eventEnd}
                type="time"
                name="eventEnd"
                className="event-form__field"
                required
              />
            </div>
            <textarea
              onChange={handleChange}
              value={description}
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
