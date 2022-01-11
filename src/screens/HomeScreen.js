import React, {useState, useEffect} from "react"
import AllListings from './AllListings'



const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const [searchResults, setSearchResults] = useState([])

	const searchItems = (e)=> {
		e.preventDefault()
		console.log('name', e.target.name.value)
		let search = e.target.name.value

	}

	const filteredListings = props.allUsers.data.user.filter((u) =>{
		console.log('u thing', u)
		return (
			(
				// u.location.toString().includes(window.location.toString())
				u.name.toLowerCase().includes(search.toLowerCase())
			)
		)
	})

	console.log('user search results', filteredListings)
	setSearchResults(filteredListings)

	return (
		<>
			<h2>Search for Sitters</h2>
			<form onSubmit={searchItems}>
				<label>location</label>
				<input type="text" name="name" id="name" />

				<input type="submit"/>
            </form>
			<AllListings allUsers={searchResults}/>
		</>
	)
}

export default Home
