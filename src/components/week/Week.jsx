import React from 'react';
import { useSelector } from 'react-redux';
import Day from '../day/Day';
import './week.scss';

const Week = () => {
  const weekDates = useSelector(state => state.calendar.weekRangeArray);
  const events = useSelector(state => state.events.eventsList);

  return (
    <div className="calendar__week">
      {weekDates.map(day => {
        const dayEvents = events ? events.filter(event => day === event.date) : null;
        return <Day key={day} dataDay={day} dayEvents={dayEvents} />;
      })}
    </div>
  );
};

export default Week;
