import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import EventInfo from './components/eventInfo/EventInfo.jsx';
import Notification from './components/Notification.jsx';
import './common.scss';

const App = () => {
  const isModalFormVisiable = useSelector(state => state.calendar.modalFormVisibility);
  const isEventEnfoVisiable = useSelector(state => state.events.eventInfoVisibility);
  const notification = useSelector(state => state.notification);

  return (
    <>
      {notification.open && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <Header />
      <Calendar />
      {isModalFormVisiable && <Modal />}
      {isEventEnfoVisiable && <EventInfo />}
    </>
  );
};
export default App;
