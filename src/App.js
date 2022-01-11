// import React, { Component, Fragment } from 'react'
<<<<<<< HEAD
import React, { useState, Fragment } from 'react'
=======
import React, { useState, useEffect, Fragment } from 'react'
>>>>>>> 4e2dd09343173ac9f9ac755331b7a21b253b5937
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
<<<<<<< HEAD
import Home from './components/Home'
=======
import HomeScreen from './screens/HomeScreen'
>>>>>>> 4e2dd09343173ac9f9ac755331b7a21b253b5937
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
<<<<<<< HEAD
=======
import axios from 'axios'
>>>>>>> 4e2dd09343173ac9f9ac755331b7a21b253b5937

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
<<<<<<< HEAD
=======
  const [allUsers, setAllUsers] = useState([])

>>>>>>> 4e2dd09343173ac9f9ac755331b7a21b253b5937

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

<<<<<<< HEAD
=======
	useEffect(() =>{
		console.log('getting all users')
		getUsers()
	}, [])

	const getUsers = () =>{
		axios({
			url: `http://localhost:8000/users`,
			method: 'GET',
		})
		.then(foundUsers=>{
			console.log('finding users', foundUsers)
			setAllUsers(foundUsers)
			console.log('all users:', foundUsers)
		})
		.catch(err =>{
			console.log(err)
		})
	}



>>>>>>> 4e2dd09343173ac9f9ac755331b7a21b253b5937
		return (
			<Fragment>
				<Header user={user} />
				<Routes>
<<<<<<< HEAD
					<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
					<Route
						path='/sign-up'
=======
					<Route path='/' element={<HomeScreen msgAlert={msgAlert} allUsers={allUsers} user={user} />} />
					<Route
						path='/sign-up/'
>>>>>>> 4e2dd09343173ac9f9ac755331b7a21b253b5937
						element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/sign-in'
						element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
					/>
          <Route
            path='/sign-out'
            element={
              <RequireAuth user={user}>
                <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
              </RequireAuth>
            }
          />
          <Route
            path='/change-password'
            element={
              <RequireAuth user={user}>
                <ChangePassword msgAlert={msgAlert} user={user} />
              </RequireAuth>}
          />
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
			</Fragment>
		)
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 4e2dd09343173ac9f9ac755331b7a21b253b5937
