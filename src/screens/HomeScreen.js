import axios from "axios";
import React, { useState, useEffect } from "react";
import apiUrl from "../apiConfig";
import { Button } from "react-bootstrap";
import AllSitters from "../components/AllSitters";

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
    let filteredSitters = sitters.filter((sitter) => {
      return (
        sitter.city.toLowerCase().includes(search.toLowerCase()) ||
        sitter.zipcode.toString().includes(search.toString())
      );
    });
    setSearchResults(filteredSitters);
  };
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={searchItems}>search</Button>
    <AllSitters sitters={searchResults}/>
    </>
  );
};

export default HomeScreen;
