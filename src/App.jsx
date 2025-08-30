import { useEffect, useRef, useState } from 'react'
import './App.css'
import Display from './components/Display';
import Button from './components/Button';
import Header from './components/Header';
import ToggleTheme from './components/ToggleTheme';

function App() {

  const [timeLeft, setTimeLeft] = useState(90);
  const [isActive, setIsActive] = useState(false);
  const endTimeRef = useRef(null);

  // Checking with current time to update because of inconsistent updates of setInterval when in alternate tabs. 

  useEffect(() => {
    let timer;
    if (isActive) {
      if(!endTimeRef.current) {
        endTimeRef.current = Date.now() + timeLeft * 1000;
      }

      timer = setInterval(() => {
        const remaining = Math.max(0, Math.floor((endTimeRef.current - Date.now()) / 1000));
        setTimeLeft(remaining);

        if(remaining === 0) {
          clearInterval(timer);
          endTimeRef.current = null;
        }
      }, 500);
    }

    return () => clearInterval(timer);
  }, [isActive]);


  // useEffect(() => {
  //   let timer;
  //   if (isActive && timeLeft > 0) {
  //     timer = setInterval(() => {
  //       setTimeLeft((prev) => prev - 1);
  //     }, 1000)
  //   }
  //   return () => clearInterval(timer);
  // }, [isActive, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isActive) {
      const audio = new Audio("/saavu.mp3");
      audio.play();
      setIsActive(false);
    }
  }, [timeLeft])


  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(90);
    endTimeRef.current = null;
  }

  return (
    <div>
      <div className='header'>
        <div className='heading'>
          <Header>⌛Countdown Timer</Header>
        </div>
        <div className='toggle-button'>
          <ToggleTheme />
        </div>
      </div>
      <div className='main-card'>
        <div className='display-content'>
          <Display time={timeLeft} setTime={setTimeLeft} isActive={isActive} />
        </div>
        <div className='button-content'>
          {
            isActive ? (
              <Button onClick={() => { setIsActive(false); }} variant="pause">Pause</Button>
            ) : (
              <Button onClick={() => (setIsActive(true))} variant="start" disabled={timeLeft === 0} >Start</Button>
            )
          }
          <Button onClick={resetTimer}>Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default App
