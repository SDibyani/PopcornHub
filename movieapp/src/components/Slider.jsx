
import React from 'react'
import CardSlider from "../components/CardSlider";

function Slider({movies}) {

    const getMoviesFromRange=(from,to)=>{
      return movies.slice(from,to);
    };
  return (
    <div>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)}></CardSlider>
         <CardSlider title="New Relases" data={getMoviesFromRange(10,20)}></CardSlider>
          <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20,30)}></CardSlider>
           <CardSlider title="Popular On Popcornhub" data={getMoviesFromRange(30,40)}></CardSlider>
            <CardSlider title="Action Movies" data={getMoviesFromRange(40,50)}></CardSlider>
             <CardSlider title="Epics" data={getMoviesFromRange(50,60)}></CardSlider>
    </div>
  )
}

export default Slider



