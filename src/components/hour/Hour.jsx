import React from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';

const Hour = ({ curentDate, dataDay, dataHour, hourEvents, fetchEvents }) => {
  const { curentDay, curentHour, curentTime } = curentDate;
  const redLineVisiable = dataDay === curentDay && curentHour === dataHour;
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
      {!hourEvents
        ? null
        : hourEvents.map(({ id, dateFrom, dateTo, title }) => {
            const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
              new Date(dateFrom).getMinutes(),
            )}`;
            const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
              new Date(dateTo).getMinutes(),
            )}`;

            return (
              <Event
                id={id}
                key={id}
                //calculating event height = duration of event in minutes
                height={(new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60)}
                marginTop={new Date(dateFrom).getMinutes()}
                time={`${eventStart} - ${eventEnd}`}
                title={title}
                fetchEvents={fetchEvents}
              />
            );
          })}
    </div>
  );
};
export default Hour;
