import React, { useEffect } from 'react';
import { Alert, Grow } from '@mui/material';
import { closeNotification } from '../redux/notificationSlice';
import { useDispatch } from 'react-redux';

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(closeNotification());
    }, 5000);
  }, []);
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
      <Alert severity={type} variant="filled">
        {message}
      </Alert>
    </Grow>
  );
};

export default Notification;
