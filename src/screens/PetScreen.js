import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";
import UserPets from "../components/UserPets";
import Footer from "../components/Footer";


function PetScreen(props) {
  const [userPets, setUserPets] = useState([]);
  const [trigger, setTrigger] = useState(false);



  useEffect(() => {
    async function fetchPets() {
      const { data } = await axios.get(`${apiUrl}/profile`, {
        headers: {
          Authorization: `Token ${props.user.token}`,
        },
      });
      console.log(data);
      setUserPets(data.user.pets_owned);
    }
    fetchPets();
  }, [trigger]);

  return (
    <div className="pet_screen">
<Footer/>
    </div>
  );
}

export default PetScreen;




{/* <div className="createpets">
{/* <CreatePets user={props.user} setTrigger={setTrigger} /> */}
// </div> */}