import React from 'react'
import Input from './Input';

const Display = ({time, setTime, isActive}) => {

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60;

  const timeChangeHandler = (type, value) => {

    let newTime = time;
    let num = parseInt(value, 10) || 0;

    if (type === "hours") {
      newTime = num * 3600 + minutes * 60 + seconds;
    } else if (type === "minutes") {
      newTime = hours * 3600 + num * 60 + seconds;
    } else if (type === "seconds") {
      newTime = hours * 3600 + minutes * 60 + num;
    }

    setTime(newTime);    
  }

  return (
    <div className='timer-display'>
      <Input value={hours} onChange={(e) => timeChangeHandler("hours", e.target.value)} disabled={isActive} />
      <span>Hrs</span>
      <Input value={minutes} onChange={(e) => timeChangeHandler("minutes", e.target.value)} disabled={isActive} />
      <span>Mins</span>
      <Input value={seconds} onChange={(e) => timeChangeHandler("seconds", e.target.value)} disabled={isActive} />
      <span>Secs</span>
    </div>
  )
}

export default Display