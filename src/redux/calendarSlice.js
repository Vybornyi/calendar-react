import { createSlice } from "@reduxjs/toolkit";
import { generateWeekRange } from "../utils/dateUtils";
import moment from "moment";

const initialState = {
  chosenStartTime: null,
  chosenEndTime: null,
  chosenDate: null,
  date: moment().format(),
  weekRangeArray: [],
  modalFormVisibility: false,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCurentWeekRange(state) {
      state.weekRangeArray = generateWeekRange(state.date)
    },
    setNextWeekRange(state) {
      const nextMondayDate = moment(state.weekRangeArray[0]).add(7, 'd');

      state.weekRangeArray = generateWeekRange(nextMondayDate)
    },
    setPrevWeekRange(state) {
      const nextMondayDate = moment(state.weekRangeArray[0]).subtract(7, 'd');

      state.weekRangeArray = generateWeekRange(nextMondayDate)
    },
    showModalForm(state, action) {
      if (action.payload) {
        const { dataHour, dataDay } = action.payload;
        state.chosenStartTime = `${dataHour}:00`;
        state.chosenEndTime = moment(`${dataHour}:00`, 'HH:mm').add(15, 'minute').format('HH:mm');
        state.chosenDate = moment(dataDay).format('YYYY-MM-DD');
        state.modalFormVisibility = true;
      } else {
        state.chosenStartTime = moment().format('HH:mm');;
        state.chosenEndTime = moment().add(15, 'minute').format('HH:mm');
        state.chosenDate = moment().format('YYYY-MM-DD');
        state.modalFormVisibility = true;
      }
    },
    closeModalForm(state) {
      state.modalFormVisibility = false;
    },

  }
});

export const { setCurentWeekRange, setNextWeekRange, setPrevWeekRange, showModalForm, closeModalForm } = calendarSlice.actions;
export default calendarSlice.reducer;

