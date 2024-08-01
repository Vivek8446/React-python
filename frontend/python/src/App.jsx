import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './FetchData';
import SendData from './SendData';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>React and Python Integration</h1>
            <SendData />
            <FetchData />
    </>
  )
}

export default App
