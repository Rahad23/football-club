import { useState } from 'react';
import './App.css';
import PlayerDtails from './component/playerDtails/PlayerDtails';
import GameTiming from './component/timingSection/GameTiming';


function App() {
  const [time, setTimes]=useState(0);
  // console.log(time);
  const getTime = (getTime)=>{
      setTimes(getTime);
  }
  return (
    <div className="grid App mx-auto">
            <PlayerDtails getTime={getTime}></PlayerDtails>
            <GameTiming time={time}></GameTiming>
    </div>
  );
}

export default App;
