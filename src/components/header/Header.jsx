import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateMonthRange } from '../../utils/dateUtils.js';
import './header.scss';
import {
  setCurentWeekRange,
  setNextWeekRange,
  setPrevWeekRange,
  showModalForm,
} from '../../redux/calendarSlice.js';

const Header = () => {
  const weekDates = useSelector(state => state.calendar.weekRangeArray);
  const monthRange = generateMonthRange(weekDates);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <button onClick={() => dispatch(showModalForm())} className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          onClick={() => dispatch(setCurentWeekRange())}
          className="navigation__today-btn button"
        >
          Today
        </button>
        <button
          onClick={() => dispatch(setPrevWeekRange())}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={() => dispatch(setNextWeekRange())}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{monthRange}</span>
      </div>
    </header>
  );
};

export default Header;
