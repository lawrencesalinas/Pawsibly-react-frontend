import { useEffect, useState } from "react";
import { getUsersAndPets } from "../../api/pets";
import ProfilePets from "./ProfilePets";

const ProfileScreen = (props) => {
  // user data and user pet is called here
  const [userPets, setUserPets] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUsersAndPets(props.user)
      .then((user) => {
        console.log(user);
        let userInfo = user.data.user;
        let userPet = user.data.user.pets_owned;
        setUserPets(userPet);
        setUserData(userInfo);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>I am the user</h1>
      <h1>{userData.email}</h1>
      <h2>{userData.namer}</h2>

      <h1>List of owner pet</h1>
      <ProfilePets myPets={userPets} />
    </div>
  );
};

export default ProfileScreen;
