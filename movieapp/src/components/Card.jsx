import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
// import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useDispatch } from "react-redux";
import { removeMovieFromLiked } from "../store";
import API from "../api/api";



 function Card({ movieData, isLiked = false }) {
 
  const navigate = useNavigate();
const dispatch= useDispatch();
 const [isHovered, setIsHovered] = useState(false);
 const [email, setEmail] = useState(undefined);

 onAuthStateChanged(firebaseAuth, (currentUser) => {
  if(currentUser) {
    setEmail(currentUser.email);
  } else  navigate("/login");
}
);



    

// const addToList = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/user/add", {
//         email,
//         data: movieData,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };


const addToList = async () => {
  try {
    await API.post("/api/user/add", {
      email,
      data: movieData,
    });
  } catch (error) {
    console.log(error);
  }
};

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
      ></img>
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
            ></img>
            <iframe
  width="100%"
  height="140"
  src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1&loop=1"
  frameBorder="0"
  allow="autoplay; encrypted-media"
              onClick={() => navigate("/player")}
            ></iframe>
          </div>
          <div className="info-container flex-column">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                ></IoPlayCircleSharp>
                <RiThumbUpFill title="Like"></RiThumbUpFill>
                <RiThumbDownFill title="Dislike"></RiThumbDownFill>
                {isLiked ? (
                  <BsCheck title="Remove From List" 
                   onClick={() =>
                      dispatch(
                        removeMovieFromLiked({ movieId: movieData.id, email })
                      )
                    }
                  
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" 
                    onClick={addToList}
                  />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => {
                  <li key={genre}>{genre}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
 };

 export default Card;


const Container = styled.div`
   max-width: 230px;
    width:230px;
    height:100%;
   cursor:pointer;
   position: relative;
     margin-top: 2rem; 

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    z-index: 10;
}
    .hover{
       z-index: 90;
       height: max-content;
       width:20rem;
       position: absolute;
       top: -18vh;
       left: 0;
       border-radius: 0.3rem;
       box-shadow:  rgba(0, 0, 0, 0.75) 0px 3px 10px;
       background-color: #181818;
       transition: 0.3s ease-in-out;

       .image-video-container {
         position: relative;
         height:140px;

         img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           border-radius: 0.3rem;
           top: 0;
           z-index: 4;
           position: absolute;
         }

         video {
           width: 100%;
           height: 140px;
           object-fit: cover;
           border-radius: 0.3rem;
           position: absolute;
           top: 0;
           z-index: 5;
          position: absolute;
         }
       }
         .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
      }
            }
      }
    }
  }
`;







