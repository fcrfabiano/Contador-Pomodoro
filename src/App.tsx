import { useEffect, useState } from 'react'

function App() {
  const [secondsAmount, setSecondsAmount] = useState(25 * 60); // 25 minutos

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    setTimeout(() => {
      setSecondsAmount(prevState => prevState - 1);
    }, 1000);
    
  }, [secondsAmount]);

  return (
    <>
      <h1>Contador Pomodoro</h1>
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </>
  )
}

export default App
