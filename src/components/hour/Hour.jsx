import React from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';

const Hour = ({ curentDate, dataDay, dataHour, hourEvents }) => {
  const { curentDay, curentHour, curentTime } = curentDate;
  const redLineVisiable = dataDay === curentDay && curentHour === dataHour ? true : false;
  const styleLine = {
    top: curentTime,
  };
  const styleDot = {
    top: curentTime - 4,
  };

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {redLineVisiable ? (
        <>
          <hr style={styleLine} className="calendar__time-slot__line" />
          <div style={styleDot} className="calendar__time-slot__dot"></div>
        </>
      ) : (
        ''
      )}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            id={id}
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default Hour;
