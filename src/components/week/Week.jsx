import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';

const Week = ({ weekDates, events, fetchEvents }) => {
  const curentDate = {
    curentDay: new Date().getDate(),
    curentHour: new Date().getHours(),
    curentTime: new Date().getMinutes(),
  };

  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        const dayEvents = events
          ? events.filter(event => {
              return (
                new Date(event.dateFrom) > new Date(dayStart) &&
                new Date(event.dateTo) < new Date(dayEnd)
              );
            })
          : null;
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            curentDate={curentDate}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};
Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};
export default Week;
