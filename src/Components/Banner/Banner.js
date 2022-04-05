import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  return (
    <section className='banner-area'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <div className='banner-content'>
              <h3 className='banner-title'>
                <span>Access 2700+</span> Online Tutorial From Top Instructor.
              </h3>
              <p>
                Meet university,and cultural institutions, who'll share their
                experience.
              </p>
              <Link className='btn' to='/reviewtwo'>
                View All Review
              </Link>
            </div>
          </Col>
          <Col md={6}>
              <div className="banner-img">
                  <img src="https://moryphea.sirv.com/assignment9/hero-1.jpg" alt="" />
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
