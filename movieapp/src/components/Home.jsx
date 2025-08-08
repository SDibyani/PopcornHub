





import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Backgroundimage from './Backgroundimage';
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { fetchMovies,getGenres } from '../store';
import Movies from '../components/Movies';
import Slider from '../components/Slider';


function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);

  useEffect(()=>{
       dispatch(getGenres());
  },[]);

  useEffect(() => {
  if (genresLoaded) {
      
    dispatch(fetchMovies({ type: "movie" }));
  }
}, [genresLoaded]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <div className="bg-black min-h-screen">
      <Navbar isScrolled={isScrolled} />

      <div className="relative h-screen w-full">
        {/* Fullscreen background image */}
        <img
          src="https://wallpapercave.com/wp/wp6873035.jpg" // ✅ replace with your image URL
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Content over image */}
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 z-10 text-white">
          <div className="text-4xl font-bold mb-6">Featured Movie</div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-200" onClick={()=>navigate('/player')}>
              <FaPlay /> Play
            </button>
            <button className="bg-gray-700 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-600">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies}></Slider>
    
    </div>
  );
}
export default Home;




