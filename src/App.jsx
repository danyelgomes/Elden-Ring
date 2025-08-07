import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Install Elden Ring Bro...</h1>
      <img src='/src/images.jpg'/>
      <a href='https://hydralauncher.gg/' target='blank' >Download</a>
    </main>
  )
}

export default App
