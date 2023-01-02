import React from 'react';
import TourItem from './TourItem';

const ToursPlace = ({tours,removeItem}) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour)=>{
          // console.log("tourplace",tour);
          return(
            <TourItem key={tour.id}{...tour} removeItem={removeItem}/>
          )
        })}
      </div>
    </section>
  )
}

export default ToursPlace