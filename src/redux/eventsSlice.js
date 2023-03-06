import { createSlice } from "@reduxjs/toolkit";
import { deleteTask, fetchEventsList, postEvent } from "../gateway/gateway";
import { closeModalForm } from "./calendarSlice";
import { showNotification } from "./notificationSlice";

const initialState = {
  eventsList: [],
  eventInfoVisibility: false,
  eventInfo: null,

};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    updateEvents(state, action) {
      state.eventsList = action.payload
    },
    showEventInfo(state, action) {
      state.eventInfoVisibility = true;
      state.eventInfo = state.eventsList.filter(event => event.id === action.payload);
    },
    closeEventInfo(state) {
      state.eventInfoVisibility = false;
    }
  }
});

export const { updateEvents, showEventInfo, closeEventInfo } = eventsSlice.actions;

export const getEventsData = () => {
  return dispatch => {
    fetchEventsList()
      .then(data => {
        dispatch(updateEvents(data));
      }).catch(error => dispatch(showNotification({
        type: 'error',
        message: error.message,
      })));
  }

}
export const createEvent = (event) => {
  return dispatch => {
    postEvent(event).then(() => {
      dispatch(getEventsData())
      dispatch(closeModalForm())
    }).catch(error => dispatch(showNotification({
      type: 'error',
      message: error.message,
    })))
  }
}
export const deleteEvent = (id) => {
  return dispatch => {
    deleteTask(id).then(() => {
      dispatch(getEventsData())
    }).catch(error => dispatch(showNotification({
      type: 'error',
      message: error.message,
    })))
  }
}
export default eventsSlice.reducer;