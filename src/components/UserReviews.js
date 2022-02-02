import React from 'react';
import {useEffect, useState} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import ReviewListing from './ReviewListing'
import apiUrl from '../apiConfig';

function UserReviews() {
const [reviewList, setReviewList] =  useState([])

    useEffect(() => {
        async function fetchData() {
          const { data } = await axios.get(`${apiUrl}/profile`)
          setReviewList(data.reviews)
      }
        fetchData();
      }, []);
      console.log();
  return (
  <div>


  </div>

  )
}

export default UserReviews;
