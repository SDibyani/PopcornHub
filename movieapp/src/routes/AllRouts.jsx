
import React from 'react'
import {Route,Routes} from 'react-router'
import Home from '../components/Home'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import Landing from '../components/Landing'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Player from '../components/Player';
import Slider from '../components/Slider';
import TVShows from '../components/TVShows';
import UserLiked from '../components/UserLiked'



function AllRouts() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='./slider' element={<Slider/>}/>
        
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path='/tv' element={<TVShows/>}/>
         <Route path='/mylist' element={<UserLiked/>}/>
        
        <Route path='/player' element={<Player />} />
      </Routes>
    </div>
  )
}

export default AllRouts