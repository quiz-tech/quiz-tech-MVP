import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { countDown } from './timerSlice';

const Timer = ({ setShowModal, showModal }) => {
  const leftTime = useSelector(state => state.timer.leftTime);
  const dispatch = useDispatch();

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function convertMsToMinutesSeconds(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);

    return seconds === 60
      ? `${padTo2Digits(minutes + 1)}:00`
      : `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (leftTime > 0) {
        dispatch(countDown());
      } else if (leftTime === 0) {
        clearInterval(countdown);
        setShowModal(true);
      }
    }, 1000);
    if (showModal === true) {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [dispatch, leftTime, setShowModal, showModal]);

  return (
    <TimerText>{`Timer: ${convertMsToMinutesSeconds(
      leftTime
    )} Mins`}</TimerText>
  );
};

export default Timer;

const TimerText = styled.p`
  position: absolute;
  top: 30px;
  right: 45px;
  font-weight: 700;
  font-size: 33px;
  color: #696f79;
`;
