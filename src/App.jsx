import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskDetailApp from './Components/TaskDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="parent">
   <TaskDetailApp/>
    </div>
    </>
  )
}

export default App
