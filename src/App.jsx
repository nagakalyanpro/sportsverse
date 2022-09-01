import React  from 'react'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import {
  Routes,
  Route,
} from "react-router-dom";

import {kolkata} from './teamdata/Kolkata'

import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Kolkata from './components/teams/Kolkata';
import Gujarat from './components/teams/Gujarat';
import Bangalore from './components/teams/Bangalore';
import Lucknow from './components/teams/Lucknow';
import Rajasthan from './components/teams/Rajasthan';
import Punjab from './components/teams/Punjab';
import Hyderabad from './components/teams/Hyderabad';
import Mumbai from './components/teams/Mumbai';
import Chennai from './components/teams/Chennai';
const kolteam = kolkata;


const App = () => {
 
 
  return (
     <>
    
     <Navbar />
     <Routes>
      <Route path='/' element={<Banner />} />
      <Route path='/kolkata' element={<Kolkata {...kolkata}/>} />
      <Route path='/guj' element={<Gujarat {...kolkata} />} />
      <Route path='/bang' element={<Bangalore />} />
      <Route path='/luck' element={<Lucknow />} />
      <Route path='/raja' element={<Rajasthan />} />
      <Route path='/punj' element={<Punjab />} />
      <Route path='/hyd' element={<Hyderabad />} />
      <Route path='/mumb' element={<Mumbai />} />
      <Route path='/chen' element={<Chennai />} />
     </Routes>
      
     </>
  )
}

export default App
