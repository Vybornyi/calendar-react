import React, { useState } from 'react';
import Event from '../event/Event';
import RedLine from '../redLine/RedLine';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';
import PropTypes from 'prop-types';

const Hour = ({ curentDate, dataDay, dataHour, hourEvents, fetchEvents }) => {
  const { curentDay, curentHour, curentTime } = curentDate;
  const redLineVisiable = dataDay === curentDay && curentHour === dataHour;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {redLineVisiable ? <RedLine curentTime={curentTime} /> : ''}
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

Hour.propTypes = {
  curentDate: PropTypes.object.isRequired,
  dataDay: PropTypes.number.isRequired,
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Hour;
