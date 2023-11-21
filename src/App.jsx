import { useState } from 'react'
import Search from './components/Search'
import Profile from './components/Profile'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Search/>
    </div>
  )
   
}

export default App
