/* eslint-disable */
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';

// Style
import './App.css';

// Component
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

// Utils
import fakeAuth from './utils/fakeAuth'

function App() {
  const [token, setToken] = useState(null)

  const handleLogin = async () => {
    const token = await fakeAuth()
    console.log(token)
    setToken(token)
  }

  const handleLogout = () => {
    setToken(null)
  }

  return (
    <main>
      <Navbar token={token} onLogout={handleLogout}/>
      <Routes>
        <Route index element={<Home onLogin={handleLogin}/>}/>
        <Route path='dashboard' element={<Dashboard />}/>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
