import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Review.css";

const ReviewTwo = () => {
  const [reviews, setReviews] = useReview();

  return (
    <section className='review-area'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='grid grid-col-3 gap-50'>
              {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReviewTwo;
