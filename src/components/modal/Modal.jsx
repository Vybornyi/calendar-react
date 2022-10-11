import React, { useState } from 'react';
import { createEvent } from '../../gateway/gateway.js';
import { getDateTime } from '../../utils/dateUtils.js';
import './modal.scss';
import PropTypes from 'prop-types';

const Modal = ({ closeModalForm, fetchEvents }) => {
  const [formInfo, setFormInfo] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  });
  const { title, date, startTime, endTime, description } = formInfo;
  const handleChange = e => {
    const { value, name } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newEvent = {
      id: Math.random(),
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };
    createEvent(newEvent).then(() => {
      fetchEvents();
    });
    closeModalForm();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={closeModalForm} className="create-event__close-btn">
            +
          </button>
          <form onSubmit={handleSubmit} className="event-form">
            <input
              onChange={handleChange}
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                onChange={handleChange}
                value={date}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                onChange={handleChange}
                value={startTime}
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input
                onChange={handleChange}
                value={endTime}
                type="time"
                name="endTime"
                className="event-form__field"
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
Modal.propTypes = {
  closeModalForm: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};
export default Modal;
