import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

//let timer;  // 변수를 전역으로 빼버리게 되면 모든 함수에서 timer라는 값을 사용할 수있게된다.
              // 하지만 1번함수에서 사용되고 2번함수에서 사용될때,
              // timer의 포인터는 2번함수를 가르키고
              // 1번함수의 변수 timer는 리액트에 의해 버려지게된다. (=> 쓰임이 없어진다.)
              // 이 문제를 해결하기 위해 ref(참조) 를 사용한다.

export default function TimerChallenge({title, targetTime}){
  const timer = useRef();   // timer 값이 유실되지 않고, 함수가 재실행되지 않게 해준다.(값이 변하지 않으니 리렌더링 X)

  const dialog = useRef();


  const [timerStarted, setTimerStarted] = useState(false);
  // 상태가 끝난것을 알려주는 상태
  const [timerExpired, setTimerExpired] = useState(false);

  //let timer;        // 변수를 사용하고, 상태값이 변함 -> 리렌더링 -> 변수 재생성 -> handleStart에서 사용하고있는 timer와 handleStop에서 사용하고있는 timer는 다른 변수다.

  function handleStart() {
    timer.current = setTimeout(()=> {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return(
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
      <section className="challenge">
        <h2>{title}</h2>
        {/*{timerExpired && <p>You lost</p>}    timerExpired 가 true라면 'you lost' */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running ...' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}