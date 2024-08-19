import React, { ReactElement } from 'react'
import { BreakLength } from './break/index'
import { SessionLength } from './session/index'

import './timeSettings.css'


export const TimerSettings = ():ReactElement => {

  return (
    <div id='time-settings'>
      <BreakLength />
      <SessionLength />
    </div>
  )
}


