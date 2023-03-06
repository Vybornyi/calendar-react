import React from 'react';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment/moment.js';
import { useSelector } from 'react-redux';

const formatDate = date => moment(date).format('MMMM Do YYYY');

const Navigation = () => {
  const curentDate = formatDate(moment());
  const weekDates = useSelector(state => state.calendar.weekRangeArray);

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        const dayNumber = moment(dayDate).day();
        return (
          <div key={dayDate} className="calendar__day-label day-label">
            <span className="day-label__day-name">{days[dayNumber]}</span>
            <span
              className={
                formatDate(dayDate) === curentDate
                  ? 'day-label__day-number day-label__day-number__current-date'
                  : 'day-label__day-number'
              }
            >
              {moment(dayDate).date()}
            </span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
