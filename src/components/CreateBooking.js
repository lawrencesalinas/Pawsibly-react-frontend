import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { Row, Col, Button, Container} from 'react-bootstrap'
// import "../css/CreateBooking.css";

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
     
      </Col>
      </Row>
    </div>
    
 </Container>
  );
}
