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

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const generateMonthRange = (weekDates) => {
  const monthOfFirstDayWeek = weekDates[0].getMonth();
  const monthOfLastDayWeek = weekDates[6].getMonth();
  const curentYear = weekDates[6].getFullYear();
  if (monthOfFirstDayWeek === monthOfLastDayWeek) {
    return `${months[monthOfFirstDayWeek]} ${curentYear}`;
  }
  return `${months[monthOfFirstDayWeek].slice(0, 3)}. - ${months[monthOfLastDayWeek].slice(0, 3)}. ${curentYear}`;

}

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
};

export const checkEventTime = (dateFrom, dateTo) => {
  const startEvent = moment(dateFrom);
  const endEvent = moment(dateTo);
  const curentTime = moment(new Date());
  if (endEvent.diff(startEvent, 'minutes') > 359) {
    alert("The task period can't be longer than 6 hours");
  }
}



