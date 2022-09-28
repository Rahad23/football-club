import './App.css';
import PlayerDtails from './component/playerDtails/PlayerDtails';
import GameTiming from './component/timingSection/GameTiming';


function App() {
  return (
    <div className="grid App mx-auto">
            <PlayerDtails></PlayerDtails>
        <GameTiming></GameTiming>
    </div>
  );
}

export default App;
