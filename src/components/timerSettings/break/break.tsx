import React, { ReactElement, useContext, useState } from 'react'
import { TimeContext } from '../../../App'

import './break.css'

export const BreakLength = ():ReactElement => {

  const timeContextProps = useContext(TimeContext);
  
  if (!timeContextProps) {
    throw new Error("TimeContextProps is undefined or null in BreakLength component.")
  }

  const { timeConfigs, setTimeConfigs } = timeContextProps;

  const increaseBreakLength = () => {
    setTimeConfigs(prev => ({...prev, breakTime: prev.breakTime + 1}));
  };

  const decreaseBreakLength = () => {
    setTimeConfigs(prev => ({ ...prev, breakTime: prev.breakTime - 1 }));
  }

  return (
    <div id='break-length-settings'>
      <h2 id='break-length-title'>Break Length</h2>
      <div id='break-time-display'>
        <button id='up-arrow-break' onClick={increaseBreakLength}>&#9650;</button>
        <div id='break-time-minutes'>{ timeConfigs.breakTime }</div>
        <button id='down-arrow-break' onClick={decreaseBreakLength}>&#9660;</button>
      </div>
    </div>
  )
}
