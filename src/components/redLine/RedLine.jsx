import React, { useEffect, useState } from 'react';
import moment from 'moment';

const RedLine = () => {
  const [marginTop, setMargin] = useState(moment().minutes());
  const styleLine = {
    top: marginTop,
  };
  const styleDot = {
    top: marginTop - 4,
  };
  useEffect(() => {
    const redLine = document.getElementById('redLine');
    redLine.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    const intervalId = setInterval(() => {
      setMargin(moment().minutes());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <hr id="redLine" style={styleLine} className="calendar__time-slot__line" />
      <div style={styleDot} className="calendar__time-slot__dot"></div>
    </>
  );
};

export default RedLine;
