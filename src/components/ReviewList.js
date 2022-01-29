import React from "react";
import Rating from "../components/Rating";

function ReviewList(props) {
  return (
    <div className="reviewlist">
      <h4>{props.review.pet_owner.first_name}</h4>
      <Rating value={props.review.rating}    color={"#f8e825"}/>
      <p>review:{props.review.review}</p>
    </div>
  );
}

export default ReviewList;
