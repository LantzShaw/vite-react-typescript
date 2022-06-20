import { Routes, Route } from 'react-router-dom'

import Home from '@/views/Home'
import Profile from '@/views/Profile'
import SignIn from '@/views/SignIn'
import User from '@/views/User'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<User />} />
    </Routes>
  )
}

export default App
