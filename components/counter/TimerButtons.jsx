const TimerButtons = ({ isRunning, onStart, onStop, onReset }) => {
    return (
      <div className="timer-buttons flex gap-2 justify-center">
        {isRunning ? (
          <button className='counter_btn hover:text-white hover:bg-black'
           onClick={onStop}>Stop</button>
        ) : (
          <button className='counter_btn hover:text-white hover:bg-black' 
          onClick={onStart}>Start</button>
        )}
        <button className='counter_btn hover:text-white hover:bg-black'
         onClick={onReset}>Reset</button>
      </div>
    );
  };
  
  export default TimerButtons;