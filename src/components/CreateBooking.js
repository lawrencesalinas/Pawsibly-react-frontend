import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { Row, Col, Button, Container} from 'react-bootstrap'
import "../css/CreateBooking.css";

export default function CreateBooking(props) {
  // console.log("this is props for sitter booking", props);
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { id } = useParams()
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleDate(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(startDate);
    console.log('end',endDate);
  }
  

  const createBooking = (e) => {
    e.preventDefault();
    const booking = {
      pet_owner: props.user.id,
      start_date: startDate,
      end_date: endDate,
      sitter: `${id}`
    };

    fetch(`http://localhost:8000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${props.user.token}`,
      },
      body: JSON.stringify(booking),
    })
      .then((createdBooking) => {
        console.log("new booking added", createdBooking);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
    <div class="createbooking col text-center">
      <Row>
    <Col>
      <DateRange
        className="datepicker"
        ranges={[selectionRange]}
        onChange={handleDate}
        name="date"
        id="date"
      />
      <Button className = 'createbooking_button' variant = 'warning' onClick={createBooking}>add</Button>
      </Col>
      </Row>
    </div>
    
 </Container>
  );
}
