import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Image, Col, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import apiUrl from "../apiConfig";
import './css/SitterDetail.css'



export default function SitterDetail() {


  const [singleSitter, setSingleSitter] = useState([]);
  const [sitterReviews, setSitterReviews] = useState([]);

  let {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/sitters/${id}`);
      setSingleSitter(data.sitter);
    }
    fetchData();
  }, [id]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:8000/reviews/${id}`
      );
      setSitterReviews(data.reviews);
    }
    fetchData();
  }, [id])




  return (
    <div className="listingdetail">
      <Row>
        <h1>
          {singleSitter.first_name} {singleSitter.last_name}
        </h1>
        <Row>
          <Col md={2}>
            <Rating
              value={singleSitter.rating}
              color={"#f8e825"}
            />
          </Col>
          <Col md={6}>
            <h5>
              {singleSitter.city}, {singleSitter.zipcode}
            </h5>
          </Col>
        </Row>
        <Row>
          <Image src="/cat.png" />
        </Row>
        <hr></hr>
        <Row>
          <Col md={8} className="mt-5">
            <h2>About</h2>
            {singleSitter.description}
          </Col>
          <Col md={4}>
            <div className="booking">
              <Row>
                <Col md={5}>
                  <h5>${singleSitter.price} / night</h5>
                </Col>
                <Col>
                  <Rating
                    value={singleSitter.rating}
                    text={`${singleSitter.numReviews} reviews`}
                    color={"#f8e825"}
                  />
                </Col>
              </Row>
              {/* <CreateBooking user={props.user} /> */}
            </div>
          </Col>
        </Row>
        <hr></hr>
        <h2>Reviews</h2>

        <Row>
          <Col md={6}>
            <div className="sitterreviews">
              {sitterReviews.map((review) => {
                return (
                  <li className="list" key={review.id}>
                    {/* pass singleSitters array to singleSitter component */}
                    {/* <ReviewList review={review} /> */}
                  </li>
                );
              })}
            </div>
          </Col>
          <Col md={6}>
            <Card>
              <div className="reviewbox">
                <h3>Review this sitter</h3>
                <h5>share your thought with other pet owners</h5>
                <Link
                  to={`/review/${singleSitter.id}`}
                  className="btn-floating btn-large waves-effect waves-light yellow"
                >
                  <i className="material-icons">comment</i>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
