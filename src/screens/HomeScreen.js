import axios from "axios";
import React, { useState, useEffect } from "react";
import apiUrl from "../apiConfig";
import { Button } from 'react-bootstrap'

const HomeScreen = (props) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sitters, setSitters] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/sitters`);
      setSitters(data.sitters);
    }
    fetchData();
  }, []);


  const searchItems = (e) => {
    e.preventDefault();
   let filteredResults =  sitters.filter(sitter=> {
        return (
            sitter.zipcode === search
        )
       
            // sitter.zipcode.includes(search).toString())
    })
    console.log('filter', filteredResults);
    // const filteredListings = sitters.filter((u) => {
    //   return u.zipcode.toString().includes(search.toString());
    // });
    // setSearchResults(filteredListings);
    // console.log("sitters search results", filteredListings);
  };
  return (
    <>
      <input
      
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick ={searchItems}>search</Button>
      <p>{search}</p>
    </>
  );
};

export default HomeScreen;
