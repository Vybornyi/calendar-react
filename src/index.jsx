import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { getEventsData } from './redux/eventsSlice';
import { setCurentWeekRange } from './redux/calendarSlice';
const rootElement = document.querySelector('#root');

store.dispatch(getEventsData());
store.dispatch(setCurentWeekRange());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
