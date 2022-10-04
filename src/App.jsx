import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { fetchEventsList } from './gateway/events.js';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [events, restoreEvents] = useState([]);
  const [weekStartDate, changeStartDate] = useState(new Date());
  const [modalFormVisible, tooggleModalFormVisible] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then(eventsData => {
      restoreEvents(eventsData);
    });
  };

  const setCurentWeek = () => {
    changeStartDate(new Date());
  };

  const getNextWeek = () => {
    const copyDate = new Date(weekStartDate);
    copyDate.setDate(copyDate.getDate() + 7);
    changeStartDate(copyDate);
  };

  const getPrevWeek = () => {
    const copyDate = new Date(weekStartDate);
    copyDate.setDate(copyDate.getDate() - 7);
    changeStartDate(copyDate);
  };

  const showModalForm = () => {
    tooggleModalFormVisible(true);
  };

  const closeModalForm = () => {
    tooggleModalFormVisible(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        weekDates={weekDates}
        getNextWeek={getNextWeek}
        getPrevWeek={getPrevWeek}
        setCurentWeek={setCurentWeek}
        showModalForm={showModalForm}
      />
      <Calendar weekDates={weekDates} eventsList={events} fetchEvents={fetchEvents} />
      {modalFormVisible ? <Modal closeModalForm={closeModalForm} fetchEvents={fetchEvents} /> : ''}
    </>
  );
};
export default App;
