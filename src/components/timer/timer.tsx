import React, { useContext, useState } from 'react'
import { TimeContext } from '../../App'

import './timer.css'

export const Timer = () => {

  const timeContextProps = useContext(TimeContext);

  if (!timeContextProps) {
    throw new Error("TimeContextProps is undefined and null in Timer component.")
  }

  const { timeConfigs, setTimeConfigs } = timeContextProps;

  const [ seconds, setSeconds ] = useState(60);
  
  function formatTimeUnitCount(timeCount:number):string {
    if (timeCount === 60 || timeCount === 0) {
      return "00";
    } else if (timeCount >= 10 && timeCount <= 59) {
      return timeCount.toString();
    } else {
      return "0" + timeCount.toString();
    }
  }

  return (
    <div id='timer-display'>
      <div id='timer-box'>
        <h1 id='timer-title'>Session</h1>
        <div id='time'> {formatTimeUnitCount(timeConfigs.sessionTime)} : {formatTimeUnitCount(seconds)}</div>
      </div>
    </div>
  )

}
