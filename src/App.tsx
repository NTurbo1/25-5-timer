import React, { createContext, useState} from 'react'
import { Header } from './components/header/index';
import { TimerSettings } from './components/timerSettings/index';

interface TimeConfigs {
  breakTime: number;
  sessionTime: number;
}

interface TimeContextProps {
  timeConfigs: TimeConfigs;
  setTimeConfigs: React.Dispatch<React.SetStateAction<TimeConfigs>>;
}

export const TimeContext = createContext<TimeContextProps | undefined>(undefined);

export default function App() {
  const [timeConfigs, setTimeConfigs] = useState<TimeConfigs>({
    breakTime: 5,
    sessionTime: 25
  });

  return ( 
    <TimeContext.Provider value={{ timeConfigs: timeConfigs, setTimeConfigs: setTimeConfigs }}>
      <Header />
      <TimerSettings /> 
    </TimeContext.Provider>
  )
}
