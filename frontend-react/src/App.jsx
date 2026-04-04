import { useState } from 'react'
import './assets/css/style.css'
import Footer from './components/footer'
import Main from './components/Main'
import Header from './components/header'
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Register from './components/register'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
