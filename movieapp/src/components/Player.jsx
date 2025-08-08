
import React from 'react'
import {BsArrowLeft} from "react-icons/bs";
import { useNavigate } from 'react-router';

function player() {
   const navigate = useNavigate();


  return (
    <div className="relative w-full h-screen">
        {/* Back Button */}
  <div className="absolute top-4 left-4 z-50">
    <button
      onClick={() => navigate("/home")}
      className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
    >
      <BsArrowLeft />
    </button>
  </div>
        <div className="h-screen w-screen bg-black flex items-center justify-center">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/b9EkMc79ZSU?si=K_qw-QAuohL0mcps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
    
  )
}

export default player