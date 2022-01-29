import React from 'react';

 export default function ReviewList(props) {
  console.log('reviewlist props', props)
  return (
  <div>    
        <p> rating:{props.review.rating}</p>
        <p>review:{props.review.review}</p>
  </div>
  )
}


