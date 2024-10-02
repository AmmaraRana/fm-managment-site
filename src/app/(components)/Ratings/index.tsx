import React from 'react'


type RatingProps = {
    rating:number;
};

const Rating = ({rating}:RatingProps) => {
  return[1,2,3,4,5].map((index)=>(
    <span key={index}
    color={index <= rating?"#FFC107": "#E4ESE9"}
     className="W-4 H-4"

 />
  ));
};

export default Rating;