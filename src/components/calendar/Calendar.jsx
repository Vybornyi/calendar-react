import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';

const Calendar = () => {
  return (
    <section className="calendar">
      <Navigation />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
