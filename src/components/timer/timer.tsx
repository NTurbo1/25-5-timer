import React, { useContext, useEffect, useState, useRef } from 'react';
import { TimeContext } from '../../App';

import './timer.css';

export const Timer = () => {
  const timeContextProps = useContext(TimeContext);

  if (!timeContextProps) {
    throw new Error("TimeContextProps is undefined or null in Timer component.");
  }

  const { timeConfigs, setTimeConfigs } = timeContextProps;

  const [minutes, setMinutes] = useState<number>(timeConfigs.sessionTime);
  const [seconds, setSeconds] = useState<number>(0);
  const [isBreak, setIsBreak] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);
  
  const alarmSound = new Audio("src/assets/audio/rooster-alarm.wav");

  useEffect(() => {
    setMinutes(timeConfigs.sessionTime);
    setSeconds(0);
  }, [timeConfigs.sessionTime]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setIsBreak(prev => !prev);
      setMinutes(isBreak ? timeConfigs.sessionTime : timeConfigs.breakTime);
      setSeconds(0);
      alarmSound.play();
    }
  }, [minutes, seconds, isBreak, timeConfigs.sessionTime, timeConfigs.breakTime]);

  useEffect(() => {
    if (!timeConfigs.paused) {
      intervalRef.current = window.setInterval(() => {
        setSeconds(prev => {
          if (prev === 0) {
            setMinutes(prevMinutes => prevMinutes - 1);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timeConfigs.paused]);

  function formatTimeUnitCount(timeCount: number): string {
    return timeCount < 10 ? `0${timeCount}` : `${timeCount}`;
  }

  function resetTimer(): void {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setMinutes(timeConfigs.sessionTime);
    setSeconds(0);
    setIsBreak(false);
    setTimeConfigs(prev => ({ ...prev, paused: true }));
  }

  function togglePauseResumeTimer(): void {
    setTimeConfigs(prev => ({ ...prev, paused: !prev.paused }));
  }

  return (
    <div id='timer-display'>
      <div id='timer-box'>
        <h1 id='timer-title'>{isBreak ? 'Break' : 'Session'}</h1>
        <div id='time'>{formatTimeUnitCount(minutes)} : {formatTimeUnitCount(seconds)}</div>
        <div id='control-timer-box'>
          <button onClick={togglePauseResumeTimer}>Pause/Resume</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
};
