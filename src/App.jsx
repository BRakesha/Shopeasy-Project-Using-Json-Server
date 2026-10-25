import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import Landingpage from './Components/Landingpage'
import Header from './Components/Header'
import Viewmore from './Components/Viewmore'
import Cartitems from './Components/Cartitems'
import { toast } from 'react-toastify'
import Login from './Components/Login'
import PrintData from './Components/PrintData'

function App() {
  const [count, setCount] = useState(0)
  let location=useLocation()
  
  return (
    <>
    {location.pathname!="/" && <Header/>}
    <Routes>
      <Route element={<Login/>} path='/'/>
      <Route element={<Landingpage/>} path='/home'/>
      <Route element={<Viewmore/>} path='/viewmore/:id'/>
      <Route element={<Cartitems/>} path='/cart'/>
      <Route element={<PrintData/>} path="/print"/>
    </Routes>
    </>
  )
}

export default App
// npx json-server --watch src/Jsondata/Appdata.json --port 4000