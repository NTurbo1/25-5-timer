import React, { createContext, useState} from 'react'
import { Header } from './components/header/index';
import { TimerSettings } from './components/timerSettings/index';
import { Timer } from './components/timer/index';

interface TimeConfigs {
  breakTime: number;
  sessionTime: number;
  paused: true;
  currentMinute: number;
  currentSeconds: number;
}

interface TimeContextProps {
  timeConfigs: TimeConfigs;
  setTimeConfigs: React.Dispatch<React.SetStateAction<TimeConfigs>>;
}

export const TimeContext = createContext<TimeContextProps | undefined>(undefined);

export default function App() {
  const [timeConfigs, setTimeConfigs] = useState<TimeConfigs>({
    breakTime: 5,
    sessionTime: 25,
    paused: true,
    currentMinute: 25,
    currentSeconds: 60
  });

  return ( 
    <TimeContext.Provider value={{ timeConfigs: timeConfigs, setTimeConfigs: setTimeConfigs }}>
      <Header />
      <TimerSettings /> 
      <Timer />
    </TimeContext.Provider>
  )
}
