import { ReactElement } from "react";

import './session.css'

export const SessionLength = ():ReactElement => {

  const sessionTime:number = 1;

  return (
    <div id='session-length-settings'>
      <h2 id='session-length-title'>Session Length</h2>
      <div id='session-time-display'>
        <div id='up-arrow-session'>&#9650;</div>
        <div id='session-time-minutes'>{ sessionTime }</div>
        <div id='down-arrow-session'>&#9660;</div>
      </div>
    </div>
  )
}