




// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { useNavigate } from 'react-router';

// function Movies() {
//     const [moviesData, setMoviesData] = useState([]);
//     const [search, setSearch] = useState('all');

//     const navigate = useNavigate();

//     const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//     async function getMovies(query = "all") {
//         try {
//             const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
//             const result = await axios.get(url);

//             if (result.data.results) {
//                 setMoviesData(result.data.results);
//             } else {
//                 setMoviesData([]);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setMoviesData([]);
//         }
//     }

//     useEffect(() => {
//         getMovies();
//     }, []);

//     function handleSearch() {
//         getMovies(search);
//     }

//     return (
//         <div>
//             <div className="max-w-4xl mx-auto flex justify-center gap-3 mt-5">
//                 <input
//                     type="text"
//                     placeholder='Search...'
//                     className='border p-2 w-xl rounded'
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <button className='p-2 bg-red-600 text-white rounded' onClick={handleSearch}>Search</button>
//             </div>

//             <div className='max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
//                 {
//                     moviesData?.length > 0 ? (
//                         moviesData.map((movie) => (
//                             <div key={movie.id} className='p-4 shadow-2xl hover:scale-105 rounded cursor-pointer'
//                                  onClick={() => navigate(`/movie/${movie.id}`)}>
//                                 <img
//                                     src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                                     alt={movie.title}
//                                     className='h-[200px] w-[150px] object-cover'
//                                 />
//                                 <p className='text-xl truncate'>{movie.title}</p>
//                                 <p>{movie.release_date}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p className='bg-amber-500 col-span-4 text-center py-4'>Movies Not Found</p>
//                     )
//                 }
//             </div>
//         </div>
//     );
// }

// export default Movies;





import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";


import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";

function MoviePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
  }, [genresLoaded]);

//   const [user, setUser] = useState(undefined);

//   onAuthStateChanged(firebaseAuth, (currentUser) => {
//     if (currentUser) setUser(currentUser.uid);
//     else navigate("/login");
//   });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default MoviePage;




