/* eslint-disable */
import {Routes, Route} from 'react-router-dom'

// Style
import './App.css';

// Component
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

// Context
import AuthProvider from './context/AuthProvider'

function App() {
    return (
    <AuthProvider>
      <main>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='dashboard' element={<Dashboard />}/>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </AuthProvider>
  )
}

export default App;
