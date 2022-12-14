import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RedLine = ({ curentTime }) => {
  const [marginTop, updateMargin] = useState(curentTime);
  const styleLine = {
    top: marginTop,
  };
  const styleDot = {
    top: marginTop - 4,
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateMargin(new Date().getMinutes());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <hr style={styleLine} className="calendar__time-slot__line" />
      <div style={styleDot} className="calendar__time-slot__dot"></div>
    </>
  );
};
RedLine.propTypes = {
  curentTime: PropTypes.number,
};
export default RedLine;
