import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import PriceList from './components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-pink-100 h-screen">
      <h1 className='text-center text-5xl bg-green-500 text-white rounded-lg p-4  '> Home page  </h1>
      </div>
  )
}

export default App
