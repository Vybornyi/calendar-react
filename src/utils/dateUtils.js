import moment from 'moment';


export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


export const generateWeekRange = (date) => {
  const startDate = moment(date).startOf('isoweek');
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = moment(startDate).clone();
    result.push(moment(base).add(i, 'd').format('YYYY-MM-DD'));
  }
  return result;
};

export const generateMonthRange = (weekDates) => {
  const monthsOfFirstDay = moment(weekDates[0]).format('MMMM');
  const monthsOfLastDay = moment(weekDates[6]).format('MMMM');
  const year = moment(weekDates[0]).format('YYYY');
  return monthsOfFirstDay === monthsOfLastDay ?
    `${monthsOfLastDay} ${year}` :
    `${monthsOfFirstDay.slice(0, 3)}. - ${monthsOfLastDay.slice(0, 3)}. ${year}`;
};

export const getHeightEvent = (eventStart, eventEnd) => {
  const eventDuration = moment(eventEnd, 'HH:mm').diff(moment(eventStart, 'HH:mm'), 'minutes');
  const minHeight = 30;
  const height = eventDuration > minHeight ? eventDuration : minHeight;
  return height;
}

export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
};

export const validateNewEvent = (startTime, endTime, eventDate, events) => {
  const curentTime = moment().format();
  const eventChosenTime = moment(`${eventDate} ${startTime}`, 'YYYY-MM-DD HH:mm').format();
  const isEventInPast = moment(eventChosenTime).diff(moment(curentTime)) < 0;
  const diffrenceInMin = moment(endTime, 'HH:mm').diff(moment(startTime, 'HH:mm'), 'minutes');
  const isExist = events.some(({ eventStart, eventEnd, date }) => {
    return eventDate === date && moment(startTime, 'HH:mm').isBetween(moment(eventStart, 'HH:mm'), moment(eventEnd, 'HH:mm'))
  });
  if (isExist) return ({
    type: 'warning',
    message: "The is another task at this time."
  });

  if (isEventInPast) return ({
    type: 'warning',
    message: "The task cannot be in the past. Please try again with a valid date or time.",
  });
  if (diffrenceInMin < 0) return ({
    type: 'warning',
    message: "Please edit the end time. It cannot be earlier than the start time.",
  });
  if (diffrenceInMin > 359) return ({
    message: "The task period cannot be longer than 6 hours",
    type: 'warning',
  });
  return ({
    type: 'success',
  });
};

export const getTimeDifferenceInfo = (date, eventStart) => {
  const eventTime = moment(`${date} ${eventStart}`, 'YYYY-MM-DD HH:mm');
  const duration = moment.duration(eventTime.diff(moment()));
  return duration.humanize(true);
}