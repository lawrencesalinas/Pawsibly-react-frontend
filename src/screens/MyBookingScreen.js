import React from 'react';
import { useEffect, useState } from "react";
import { fetchWithAuth } from '../api/fetch';
import UserBooking from '../components/UserBooking'

function MyBookingScreen({user}) {
    const [userBooking, setUserBooking] = useState([])

    useEffect(() => {
        try {
          fetchWithAuth("bookings", setUserBooking, "bookings", user);
        } catch (error) {
          console.log(error);
        }
      }, []);
      
// console.log(userBooking);

  return(

   <div>
   <UserBooking userBooking={userBooking}/>
   </div>
  )
}

export default MyBookingScreen;
