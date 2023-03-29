import React from 'react';
import { useDispatch } from 'react-redux';
import { showModalForm } from '../../redux/calendarSlice';
import Event from '../event/Event';
import RedLine from '../redLine/RedLine';

import './hour.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

const Hour = ({ dataDay, dataHour, hourEvents }) => {
  const dispatch = useDispatch();
  const curentDay = moment().format('YYYY-MM-DD');
  const hours = moment().hours();
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
      {redLineVisiable && <RedLine />}
      {hourEvents?.map(event => {
        return <Event key={event.id} event={event} />;
      })}
    </div>
  );
};

Hour.propTypes = {
  dataDay: PropTypes.string.isRequired,
  hourEvents: PropTypes.array.isRequired,
};

export default Hour;
