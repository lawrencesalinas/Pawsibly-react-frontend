import React from 'react';
import { useState, useEffect } from "react"
import { Container, TextInput } from "react-materialize"
import axios from "axios"
import { Modal, Button } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom"
import apiUrl from '../apiConfig';
import './css/CreateReview.css'



function CreateReview({user, setTrigger}) {

    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    let {id}= useParams()
 
    const handleClose = () => setShow(false);

    const handleShow = () => {
      if(user==null){
        navigate('/sign-in')
      }else{
      return setShow(true);
      }
    }
    const handleChange = (e) => {
      if(e.target.value > 5){
        return 'too much'
      } else{
     return  setRating(e.target.value)
    } 
  }
    const createReview = () => {

      const sitterReview = {pet_owner: user.id, sitter:id, review:review, rating:rating}
      console.log(sitterReview);
      fetch(`${apiUrl}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${user.token}`
        },
        body: JSON.stringify(sitterReview)
    }).then(createdReview => {
        setTrigger(x => !x)
        console.log('new review added', createdReview);
    })
    .catch(error => {
        console.log(error);
    })
    handleClose(true)
    }

    
    
  return (
<>
   <button variant='warning'   className="btn-floating btn-large waves-effect waves-light yellow" onClick={handleShow}>
   <i class="material-icons">comment</i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <label>
        Review
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <br />
        <label>Rating(1-5)
          <input
            type="number"
            value={rating}
            onChange={handleChange}
          />
        </label>
        <br />
        <Button onClick={() => createReview()}>Submit</Button>
      </Modal>
</>
  )
}

export default CreateReview;
