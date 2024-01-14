import { forwardRef } from 'react';

const ResultModal = forwardRef( function ResultModal({result,targetTime}, ref) {    // ref는 두번째 인자로 받는다.
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal;