import React, { Component } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import moment from 'moment/moment.js';
import './calendar.scss';
import PropTypes from 'prop-types';

const formatDate = date => moment(date).format('MMMM Do YYYY');

const Calendar = ({ weekDates, eventsList, fetchEvents }) => {
  const curentDate = formatDate(new Date());
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} curentDate={curentDate} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={eventsList} fetchEvents={fetchEvents} />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  eventsList: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};
export default Calendar;
