import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <section className='home-page'>
            <Banner />
            <Review />
        </section>
    );
};

export default Home;