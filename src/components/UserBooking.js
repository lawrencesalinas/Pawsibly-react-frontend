import React from 'react';

function UserBooking({userBooking}) {
console.log(userBooking);
  return(
   <div>
    {userBooking.map((b) => {
        console.log('all listing b', b)
        return <div>
        
      
        

        </div>
    })
}

   </div>
  )
}

export default UserBooking;
