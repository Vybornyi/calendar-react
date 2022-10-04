import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';

const Day = ({ dataDay, dayEvents, curentDate, fetchEvents }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents
          ? dayEvents.filter(event => new Date(event.dateFrom).getHours() === hour)
          : null;

        return (
          <Hour
            curentDate={curentDate}
            key={dataDay + hour}
            dataDay={dataDay}
            dataHour={hour}
            hourEvents={hourEvents}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;
