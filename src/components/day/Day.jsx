import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';
import moment from 'moment';

const Day = ({ dataDay, dayEvents }) => {
  const hours = Array.from({ length: 24 }, (value, index) => {
    return index.toString().padStart(2, '0');
  });

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents
          ? dayEvents.filter(event => moment(event.eventStart, 'HH:mm').format('HH') === hour)
          : null;
        return (
          <Hour key={dataDay + hour} dataDay={dataDay} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};
Day.propTypes = {
  dataDay: PropTypes.string.isRequired,
  dayEvents: PropTypes.array.isRequired,
};

export default Day;
