import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import apiUrl from "../apiConfig";
import axios from "axios";
import "./css/ProfileScreen.css";

export default function ProfileScreen(props) {
  // user data and user pet is called here
  const [image, setImage] = useState();
  const [userData, setUserData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${apiUrl}/profile`, {
        headers: {
          Authorization: `Token ${props.user.token}`,
        },
      });

      setUserData(data.user);
    }
    fetchData();
  }, [trigger]);

  const uploadPhoto = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", image);
    uploadData.append("id", userData.id);

    fetch("http://localhost:8000/profileImage", {
      method: "POST",
      headers: {
        Authorization: `Token ${props.user.token}`,
      },
      body: uploadData,
    })
      .then((res) => {
        //  console.log('new pehoto added',res);
        setTrigger((x) => !x);
      })
      // useNavigate(-1)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="profile">
      <Row>
        <Col md={3}>
          <Card>
            <Image src={apiUrl + userData.image} fluid />
            <Button variant="success" onClick={() => uploadPhoto()}>
              upload photo
            </Button>
            <label>
              <input
                type="file"
                onChange={(evt) => setImage(evt.target.files[0])}
              />
            </label>
          </Card>
        </Col>

        <Col md={3}>
          <div className="profilescreen_info">
            <h3 className="flow-text">Hello, {userData.last_name}!</h3>

            <Row className="profilescreen_buttons">
              <Link className="link" to={`/mybookings/${props.user.id}`}>
                <Button variant="warning">My Bookings</Button>
              </Link>
              <Link className="link" to={`/myreviews/${props.user.id}`}>
                <Button variant="warning">My Reviews</Button>
              </Link>
              <Link className="link" to={`/contact/${props.user.id}`}>
                <Button variant="warning">Contact sitter</Button>
              </Link>
            </Row>
          </div>
        </Col>
        <Col className="pt-5">
          <Link to={`/pets/`}>
            <Button variant="warning">My Pets</Button>
          </Link>
        </Col>
        <Col>
          <i className="fas fa-paw paw fa-10x"></i>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
