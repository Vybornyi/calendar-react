import React from 'react';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment/moment.js';
import PropTypes from 'prop-types';

const formatDate = date => moment(date).format('MMMM Do YYYY');

const Navigation = ({ weekDates, curentDate }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        return (
          <div key={dayDate.getDay()} className="calendar__day-label day-label">
            <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
            <span
              className={
                formatDate(dayDate) === curentDate
                  ? 'day-label__day-number day-label__day-number__current-date'
                  : 'day-label__day-number'
              }
            >
              {dayDate.getDate()}
            </span>
          </div>
        );
      })}
    </header>
  );
};
Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
  curentDate: PropTypes.string.isRequired,
};
export default Navigation;
