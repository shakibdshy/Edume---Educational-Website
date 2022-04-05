import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SimpleAreaChart from '../Chart/SimpleAreaChart';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section className='dashboard-area'>
            <Container>
                <Row>
                    <Col md={6}>
                        <SimpleAreaChart />
                    </Col>
                    <Col md={6}>
                        <SimpleAreaChart />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;