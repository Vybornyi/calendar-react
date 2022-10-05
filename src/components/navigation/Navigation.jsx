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
          <div className="calendar__day-label day-label">
            {formatDate(dayDate) === curentDate ? (
              <div className="day-label__current-date"></div>
            ) : (
              ''
            )}
            <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
            <span className="day-label__day-number">{dayDate.getDate()}</span>
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
