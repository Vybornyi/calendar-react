import React from 'react';
import { useDispatch } from 'react-redux';
import { showModalForm } from '../../redux/calendarSlice';
import Event from '../event/Event';
import RedLine from '../redLine/RedLine';
import { getHeightEvent } from '../../../src/utils/dateUtils.js';
import './hour.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

const Hour = ({ dataDay, dataHour, hourEvents }) => {
  const dispatch = useDispatch();
  const curentDay = moment().format('YYYY-MM-DD');
  const { minutes, hours } = moment().toObject();
  const redLineVisiable = curentDay === dataDay && hours == dataHour;

  return (
    <div
      onClick={e => {
        if (!e.target.dataset.time) {
          return;
        }
        dispatch(showModalForm({ dataHour, dataDay }));
      }}
      className="calendar__time-slot"
      data-time={dataHour}
    >
      {redLineVisiable ? <RedLine curentTime={minutes} /> : ''}
      {!hourEvents
        ? null
        : hourEvents.map(({ id, eventStart, eventEnd, title, description }) => {
            const height = getHeightEvent(eventStart, eventEnd);

            return (
              <Event
                id={id}
                key={id}
                height={height}
                marginTop={+moment(eventStart, 'HH:mm').format('mm')}
                time={`${eventStart} - ${eventEnd}`}
                title={title}
                description={description}
              />
            );
          })}
    </div>
  );
};

Hour.propTypes = {
  dataDay: PropTypes.string.isRequired,
  hourEvents: PropTypes.array.isRequired,
};

export default Hour;
