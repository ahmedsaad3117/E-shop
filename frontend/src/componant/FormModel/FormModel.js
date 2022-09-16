import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import ReactStars from "react-rating-stars-component";
import Modal from "react-bootstrap/Modal";

import productService from "../../services/productService";
import classes from "./FormModule.module.css";

const FormModel = ({ _id, name, description, image, listOfReviews }) => {
  const [reviewerName, setReviewerName] = useState(null);
  const [rating, setRating] = useState(0);
  const [writtenReview, setWrittenReview] = useState(null);

  const [isShow, setIsShow] = useState(false);
  const [isVaild, setIsVaild] = useState(false);

  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  const inputReviewerNameHandelr = (event) => {
    setReviewerName(event.target.value);
  };

  const inputRatingHandelr = (data) => {
    setRating(data);
  };

  const inputWrittenReviewHandelr = (event) => {
    setWrittenReview(event.target.value);
  };

  const addReview = async () => {
    try {
      await productService.addReviewApi(_id, {
        reviewerName,
        rating,
        writtenReview,
      });
    } catch (err) {
      console.log(err.message);
    }

    handleClose();
  };

  const submitForm = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    } else {
      addReview();
    }
    setIsVaild(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Review
      </Button>

      <Modal show={isShow} onHide={handleClose}>
        <Form noValidate onSubmit={submitForm} validated={isVaild}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Your Name</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={inputReviewerNameHandelr}
                      value={reviewerName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a name.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Rating</Form.Label>
                  <div className={classes.rating_reviews}>
                    <ReactStars
                      count={5}
                      value={rating}
                      size={48}
                      required
                      onChange={inputRatingHandelr}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </div>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={inputWrittenReviewHandelr}
                    value={writtenReview}
                  />
                </Form.Group>
              </Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              label="Submit"
              className="p-mt-2"
            >
              Review it
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default FormModel;
