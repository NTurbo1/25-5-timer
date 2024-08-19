import React, { ReactElement } from 'react'
import './break.css'

export const BreakLength = ():ReactElement => {
  
  const breakTime:number = 1;

  return (
    <div id='break-length-settings'>
      <h2 id='break-length-title'>Break Length</h2>
      <div id='break-time-display'>
        <div id='up-arrow-break'>&#9650;</div>
        <div id='break-time-minutes'>{ breakTime }</div>
        <div id='down-arrow-break'>&#9660;</div>
      </div>
    </div>
  )
}
