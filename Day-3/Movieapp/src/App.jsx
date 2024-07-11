import { useState } from 'react'
import './App.css'
import View from './components/View'
import Navbar from './components/Navbar'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
      <h1>Welcome to Movie Display App</h1>
      <Navbar /><br/>
    <Routes>

      <Route path='/' element={<View/>}></Route>
      <Route path='/add' element={<Add movie={{name:"KGF",category:"Action",director:"Prashant Neel",release_year:2022,poster:'https://wallpapers.com/images/featured/kgf-uvwzff0j1u9i4otf.jpg'}}/>}></Route>

    </Routes>
    </>
  )
}

export default App
