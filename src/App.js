import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import Prebrowse from './pages/PreBrowse'
import Browse from './pages/Browse'
import Movies from './pages/Movies'
import React from 'react'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/genre" element={<Genre/>}/>
        <Route path="/prebrowse" element={<Prebrowse/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/movies" element={<Movies/>}/>
    </Routes>
    </>
  )
}

export default App
