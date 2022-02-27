import { useState } from 'react'

function App() {
  const [secondsAmount, setSecondsAmount] = useState(25 * 60); // 25 minutos

  return (
    <h1>Contador Pomodoro</h1>
    <span>25</span>
    <span>:</span>
    <span>00</span>
  )
}

export default App
