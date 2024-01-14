import {useState, useRef} from "react";

export default function Player() {
  const playerName = useRef();  // 자바스크립트 객체

  const [enteredPlayerName,setEnteredPlayerName] = useState('');

  function handleClick() {
    // current속성이 실제 참조값을 갖고있다. => input 요소를 값을 보관 => input HTML 요소를 통해서 input의 속성들에 접근할수 있게된다.
    // playerName.current.value;

    // setEnteredPlayerName 상태 업데이트
    setEnteredPlayerName(playerName.current.value);

  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
       <input 
          ref={playerName} 
          type="text" 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// 상태 값들은 컴포넌트들의 재실행을 야기합니다.