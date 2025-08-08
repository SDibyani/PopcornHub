// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";
// import { FiPower } from "react-icons/fi";
// import {onAuthStateChanged, signOut } from "firebase/auth";
// import { firebaseAuth } from "../utils/firebase-config";
// // import { useNavigate } from 'react-router-dom';

// function Navbar({ isScrolled }) {
//   const links = [
//     { name: "Home", link: "/" },
//     { name: "TV Shows", link: "/tv" },
//     { name: "Movies", link: "/movies" },
//     { name: "My List", link: "/mylist" },
//   ];

// //   const navigate = useNavigate();

// //  onAuthStateChanged(firebaseAuth,(currentUser)=>{
// //     if(!currentUser) navigate("/login");
// //   })

//   const [showSearch, setShowSearch] = useState(false);
//   const [inputHover, setInputHover] = useState(false);

//   return (
//     <Container>
//       <nav className={`flex items-center justify-between px-8 py-3 fixed top-0 w-full z-50 ${isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"} transition-all`}>
//         {/* Left Section */}
//         <div className="flex items-center gap-6">
//          <Link to="/" className="text-3xl font-extrabold text-red-600 tracking-wider">
//             POPCORNHUB
//           </Link>
//           <ul className="flex gap-6 text-white font-medium">
//             {links.map(({ name, link }) => (
//               <li key={name}>
//                 <Link to={link}>{name}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Search */}
//           <div className={`flex items-center gap-2 text-white border ${showSearch ? "px-2 py-1 border-white" : "border-transparent"} rounded transition-all`}>
//             <button
//               onFocus={() => setShowSearch(true)}
//               onBlur={() => {
//                 if (!inputHover) setShowSearch(false);
//               }}
//               className="outline-none"
//             >
//               <FaSearch />
//             </button>
//             {showSearch && (
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="bg-transparent outline-none text-white placeholder-gray-400"
//                 onMouseEnter={() => setInputHover(true)}
//                 onMouseLeave={() => setInputHover(false)}
//                 onBlur={() => {
//                   setShowSearch(false);
//                   setInputHover(false);
//                 }}
//               />
//             )}
//           </div>

//           {/* Logout */}
//           <button onClick={() => signOut(firebaseAuth)} className="text-white text-xl hover:text-red-600 transition">
//             <FiPower />
//           </button>
//         </div>
//       </nav>
//     </Container>
//   );
// }

// export default Navbar;

// const Container = styled.div`
//   .scrolled {
//    background-color : black;
//   }
//    nav {
//      position : sticky;
//      top:0;
//      height:6.5rem;
//      width:100%;
//      justify-content: space-between;
//      position: fixed;
//      z-index:2;
//      padding: 0 4rem;
//      align-items:center;
//      transition: 0.3s ease-in-out;
//      .left {
//      gap:2rem;
//      .links{
//      list-style-type:none;
//      gap:2rem;
//      li {
//      a {
//      color: white;
//      text-decoration:none;
//      }}
//      }}
//     .right{
//     gap:1rem;
//     button{
//     background-color:transparent;
//     }}
//    }
// `; 


  


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiPower } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate} from 'react-router-dom';

function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const navigate = useNavigate();

 onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(!currentUser) navigate("/login");
  })

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"} transition-all`}>
      {/* <nav className="flex items-center justify-between px-8 py-4"> */}
     <nav className=" h-24 flex items-center justify-between px-8 py-3 fixed top-0 w-full z-50 bg-black bg-opacity-90 shadow-md transition-all">


        {/* Left Section */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-3xl font-extrabold text-red-600 tracking-wider">
            POPCORNHUB
          </Link>
          <ul className="flex gap-6 text-white font-medium">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link to={link} className="hover:text-red-500 transition">{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 text-white border ${showSearch ? "px-2 py-1 border-white" : "border-transparent"} rounded transition-all`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
              className="outline-none"
            >
              <FaSearch />
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white placeholder-gray-400"
                onMouseEnter={() => setInputHover(true)}
                onMouseLeave={() => setInputHover(false)}
                onBlur={() => {
                  setShowSearch(false);
                  setInputHover(false);
                }}
              />
            )}
          </div>
          <button onClick={() => signOut(firebaseAuth)} className="text-white text-xl hover:text-red-600 transition">
            <FiPower />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;




