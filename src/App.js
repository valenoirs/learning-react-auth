/* eslint-disable */
import {Routes, Route} from 'react-router-dom'

// Style
import './App.css';

// Component
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import ProtectedRoute from './utils/ProtectedRoute'

// Context
import AuthProvider from './context/AuthProvider'

function App() {
    return (
    <AuthProvider>
      <main>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route path='admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }/>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </AuthProvider>
  )
}

export default App;
