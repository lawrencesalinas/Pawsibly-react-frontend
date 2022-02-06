import React, { useState, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from "./components/shared/AutoDismissAlert/AutoDismissAlert";
import Header from "./components/shared/Header";
import RequireAuth from "./components/shared/RequireAuth";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import ChangePassword from "./components/auth/ChangePassword";
import PetDetailScreen from "./screens/PetDetailScreen";
import SitterDetail from "./screens/SitterDetail";
import PetScreen from "./screens/PetScreen";
import Footer from "./components/Footer";
const App = () => {
  const [user, setUser] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);
  const clearUser = () => {
    console.log("clear user ran");
    setUser(null);
  };
  const deleteAlert = (id) => {
    setMsgAlerts((prevState) => {
      return prevState.filter((msg) => msg.id !== id);
    });
  };

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid();
    setMsgAlerts(() => {
      return [{ heading, message, variant, id }];
    });
  };

  return (
    <Fragment>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen msgAlert={msgAlert} user={user} />}/>
        <Route path="/profile" element={<ProfileScreen user={user} />} />
        <Route path="/sign-up" element={<SignUp msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path="/sign-in" element={<SignIn msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path="/pets" element={<PetScreen msgAlert={msgAlert} user={user} />}/>
        <Route path="/pets/:id " element={<PetDetailScreen msgAlert={msgAlert} setUser={setUser} />}/>
        <Route path="/sign-out" element={<RequireAuth user={user}><SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /></RequireAuth>}/>
        <Route path="/change-password" element={<RequireAuth user={user}><ChangePassword msgAlert={msgAlert} user={user} /></RequireAuth>}/>
        <Route path="/sitterlisting/:id" element={<SitterDetail />} />
      </Routes>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <Footer/>
    </Fragment>
  )
}

export default App;
