import React from 'react';
import { generateMonthRange } from '../../utils/dateUtils.js';
import './header.scss';

const Header = ({
  weekDates,
  getNextWeek,
  getPrevWeek,
  setCurentWeek,
  showModalForm,
}) => {
  const monthRange = generateMonthRange(weekDates);
  return (
    <header className='header'>
      <button onClick={showModalForm} className='button create-event-btn'>
        <i className='fas fa-plus create-event-btn__icon'></i>Create
      </button>
      <div className='navigation'>
        <button
          onClick={setCurentWeek}
          className='navigation__today-btn button'
        >
          Today
        </button>
        <button
          onClick={getPrevWeek}
          className='icon-button navigation__nav-icon'
        >
          <i className='fas fa-chevron-left'></i>
        </button>
        <button
          onClick={getNextWeek}
          className='icon-button navigation__nav-icon'
        >
          <i className='fas fa-chevron-right'></i>
        </button>
        <span className='navigation__displayed-month'>{monthRange}</span>
      </div>
    </header>
  );
};

export default Header;
