import { ReactElement, useContext } from "react";
import { TimeContext } from "../../../App";

import './session.css'

export const SessionLength = ():ReactElement => {


  const timeContextProps = useContext(TimeContext)

  if (!timeContextProps) {
    throw new Error("TimeContextProps is undefined or null in SessionLength component.")
  }

  const { timeConfigs, setTimeConfigs } = timeContextProps;

  const increaseSessionLength = () => {
    if (!timeConfigs.paused) {
      setTimeConfigs(prev => ({ ...prev, sessionTime: prev.sessionTime + 1 }))
    }
  }

  const decreaseSessionLength = () => {
    if (!timeConfigs.paused) {
      setTimeConfigs(prev => ({ ...prev, sessionTime: prev.sessionTime - 1 }))
    }
  }

  return (
    <div id='session-length-settings'>
      <h2 id='session-length-title'>Session Length</h2>
      <div id='session-time-display'>
        <button id='up-arrow-session' onClick={ increaseSessionLength }>&#9650;</button>
        <div id='session-time-minutes'>{ timeConfigs.sessionTime }</div>
        <button id='down-arrow-session' onClick={ decreaseSessionLength }>&#9660;</button>
      </div>
    </div>
  )
}