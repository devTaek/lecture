import { useState,useEffect,useRef } from 'react';

import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  const [position, setPosition] = useState(0);
  const [id, setId] = useState(0);

  let headerHeight = 60;
  if(position > headerHeight) {
    setId(id+1);
  }

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  },[id])


  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
