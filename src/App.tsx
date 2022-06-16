import { Routes, Route } from 'react-router-dom'

import Home from '@/views/Home'
import Profile from '@/views/Profile'
import SignIn from '@/views/SignIn'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/" element={<SignIn />}></Route>
    </Routes>
  )
}

export default App
