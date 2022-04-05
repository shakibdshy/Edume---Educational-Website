import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <section className='blog-area'>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>What is Context API?</h1>
                        <p>Context API Is the New Feature In React App. Earlier React Version 16.3 React First Introduce Context API. We Know That how match we provides a props to declare our child component. It's Say "prop drilling" or moving props from parent child to child component. This is where we can slow down our application and cause development issues.</p>
                    </Col>
                    <Col md={12}></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;