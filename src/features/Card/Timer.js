import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import { countSeconds } from './timerSlice';

const Timer = ({ minutes, seconds, setMinutes, setSeconds }) => {
  // const time = useSelector(state => state.timer.time);
  // const dispatch = useDispatch();

  useEffect(() => {
    const countdown = setInterval(() => {
      // setTime(prev => prev - 1000);

      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, setMinutes, setSeconds]);

  return (
    <TimerText>
      {`Timer: ${minutes}:${seconds < 10 ? `0${seconds}` : seconds}Mins`}
      {/* {time} */}
    </TimerText>
  );
};

export default Timer;

const TimerText = styled.p`
  position: absolute;
  top: 24px;
  right: 45px;
  font-weight: 700;
  font-size: 33px;
  color: #696f79;
`;
