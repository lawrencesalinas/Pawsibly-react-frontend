import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";

function PetScreen(props) {
  const [userPets, setUserPets] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);


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
  console.log("HELLLOOOOOOOOOOOOO", userPets);
  return (
    <div className="pet_screen">
      {/* <ProfilePets
        myPets={userPets}
        user={props.user}
        setTrigger={setTrigger}
      />
      <div className="createpets">
        <CreatePets user={props.user} setTrigger={setTrigger} />
      </div> */}
    </div>
  );
}

export default PetScreen;
