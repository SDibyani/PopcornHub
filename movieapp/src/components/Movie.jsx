
// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { useNavigate } from 'react-router'

// function Movies() {

//     const [moviesData, setMoviesData] = useState([])
//     const [search, setSearch] = useState('all');



//     // console.log(search)

//     const nagivate = useNavigate()

//     const api = import.meta.env.VITE_API;
//     // console.log(api)
    
    
//     async function getMovies(s = "all") {
//         const url = api + "&s=" + s;
//         // console.log(first)
        
//         const result = await axios.get(url)
        
//         setMoviesData(result.data.Search)
//     }
//     useEffect(() => {
//         getMovies()
//     }, [])



//     function handleSearch() {
//         getMovies(search)
//     }
//     return (
//         <div className=''>

//             <div className="max-w-4xl mx-auto flex justify-center gap-3 mt-5">
//                 <input type="text" placeholder='Search...' className='border p-2 w-xl rounded' onChange={(e) => {
//                     setSearch(e.target.value)
//                 }} />
//                 <button className='p-2 bg-red-600 rounded' onClick={handleSearch}>Search</button>
//             </div>

//             <div className=' max-w-4xl mx-auto grid grid-cols-4'>
//                 {
//                     moviesData?.length === 0 ? <p className='bg-amber-500'>Movies Not Found</p> :
//                         moviesData?.length > 0 && moviesData.map((ele) => (<div key={ele.imdbID}>
//                             <div
//                                 className='p-4 shadow-2xl hover:scale-105 rounded'
//                                 onClick={() => nagivate(`/movie/${ele.imdbID}`)}
//                             >
//                                 <img src={ele.Poster} alt="" className='h-[200px] w-[150px]' />
//                                 <p className='text-xl truncate '>{ele.Title}</p>
//                                 <p>{ele.Year}</p>
//                                 <p>{ele.Type}</p>
//                             </div>
//                         </div>))
//                 }
//             </div>

//         </div>
//     )
// }

// export default Movies




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
                );
                setMovie(res.data);
            } catch (err) {
                console.error("Error fetching movie details:", err);
            }
        }
        fetchMovie();
    }, [id]);

    if (!movie) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-[300px] rounded shadow"
            />
            <p className="mt-4"><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
            <p><strong>Overview:</strong></p>
            <p className="mt-2">{movie.overview}</p>
        </div>
    );
}

export default Movie;
