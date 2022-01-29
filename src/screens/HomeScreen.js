import axios from "axios";
import React, { useState, useEffect } from "react";
import apiUrl from "../apiConfig";
import { Button } from "react-bootstrap";
import AllSitters from "../components/AllSitters";
import { Icon, Parallax } from "react-materialize";
import Footer from "../components/Footer";


const HomeScreen = (props) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sitters, setSitters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/sitters`)
      setSitters(data.sitters)
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
          <div className="section white">
            <div className="row container" class="center-align">
              <h2 className="header">
                find sitters near you by zip code
              </h2>
              <form onSubmit={searchItems}>
                <div className="input-field">
                  <input id="zipcode" type="number" name="zipcode" required />
                  <button type="submit" class="btn-floating btn-large waves-effect waves-light red accent-2"><i class="material-icons">send</i></button>
                  <label>
                    <Icon>search</Icon>
                  </label>
                </div>
              </form>
              <AllSitters sitters={searchResults} />
            </div>
          </div>
          <div>
            <Parallax
              image={<img alt="" src="/cat.png" />}
              options={{
                responsiveThreshold: 0
              }}
            />
            <div className="section white">
              <div className="row container" class="center-align">
                <h2 className="header">
                  search for a nearby sitter
                </h2>
                <p className="grey-text text-darken-3 lighten-3">
                  With Pawsibly, your pet stays in a sitter's home, whether you're traveling for a few days or just out for the day. Here's how it works.
                </p>
                <div class="row" style={{ marginTop: '50px' }}>
                  <div class="col s4">
                    {/* Promo Content 1 goes here */}
                    <i class="large material-icons">search</i>
                    <h3>1. find a sitter near you</h3>
                  </div>
                  <div class="col s4">
                    {/* Promo Content 2 goes here */}
                    <i class="large material-icons">schedule</i>
                    <h3>2. schedule a booking</h3>
                  </div>
                  <div class="col s4">
                    {/* Promo Content 3 goes here  */}
                    <i class="large material-icons">comment</i>
                    <h3>3. leave a review</h3>
    
    
                  </div>
    
                </div>
              </div>
            </div>
            <Parallax
              image={<img alt="" src="/dog.png" />}
              options={{
                responsiveThreshold: 0
              }}
            />
          </div>
          <Footer/>
        
        </>
      
    
      )
    }

    export default HomeScreen