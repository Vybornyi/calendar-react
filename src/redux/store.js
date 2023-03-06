import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import calendarReducer from "./calendarSlice";
import notificationReducer from "./notificationSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    calendar: calendarReducer,
    notification: notificationReducer,
  },
});

export default store;
