import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (

    <div className="h-screen w-screen justify-center items-center bg-gray-100" style={{ background: color }}>
      <div className="flex justify-center bg-cyan-50">
        <div className="absolute bottom-4 bg-white rounded flex justify-center p-4" >
          <button className="text-white bg-red-500 p-5 m-4 rounded-xl" onClick={() => setColor('red')}>
            RED
          </button>
          <button className="text-white bg-blue-500 p-5 m-4 rounded-xl" onClick={() => setColor('blue')}>
            Blue
          </button>
          <button className="text-white bg-green-500 p-5 m-4 rounded-xl" onClick={() => setColor('green')}>
            Green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
