import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: 'null',
  type: 'error',
  open: false,
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type;

    },
    closeNotification(state) {
      state.open = false;
    },
  }
});

export const { showNotification, closeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

