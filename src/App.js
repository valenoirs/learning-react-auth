/* eslint-disable */
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
    </main>
  );
}

export default App;
