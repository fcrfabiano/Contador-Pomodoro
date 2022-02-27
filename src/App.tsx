import { useEffect, useState } from 'react'

function App() {
  const [secondsAmount, setSecondsAmount] = useState(25 * 60); // 25 minutos

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    setSecondsAmount(prevState => prevState - 1);
  }, [secondsAmount]);

  return (
    <>
      <h1>Contador Pomodoro</h1>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </>
  )
}

export default App
