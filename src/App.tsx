import { Routes, Route } from 'react-router-dom'

import Home from '@/views/Home'
import Profile from '@/views/Profile'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Profile />}></Route>
    </Routes>
  )
}

export default App
