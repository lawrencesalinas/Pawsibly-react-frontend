import React from 'react';
import { useState, useEffect } from "react"
import { TextInput } from "react-materialize"
import axios from "axios"
import { Modal, Button } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom"
import apiUrl from '../apiConfig';



function CreateReview() {
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    let {id}= useParams()
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createReview = () => {
        
    }

    
    
  return (
  <div>
   <button variant='warning'   class="btn-floating btn-large waves-effect waves-light yellow" onClick={handleShow}>
   <i class="material-icons">comment</i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
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
        <label>Rating
          <input
            type="text"
            value={rating}
            onChange={(evt) => setRating(evt.target.rating)}
          />
        </label>
        <br />
        <Button onClick={() => createReview()}>Add Pet</Button>
      </Modal>
  </div>
  )
}

export default CreateReview;
