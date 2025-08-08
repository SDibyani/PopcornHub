


import React, { useEffect } from 'react';
import { XyzTransitionGroup } from '@animxyz/react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const letters = "POPCORNHUB".split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signup');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <XyzTransitionGroup
        className="flex gap-1 text-6xl font-extrabold text-red-600"
        xyz="fade small stagger delay-2"
      >
        {letters.map((letter, index) => (
          <div key={index} className="xyz-in">{letter}</div>
        ))}
      </XyzTransitionGroup>
    </div>
  );
}

export default Landing;




