import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../Images/error.png";
import './NotFound.css';


const NotFound = () => {
  return (
    <section className='error-area py-200'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
            <div className='error-item text-center'>
              <div className='error-thumb mb-45'>
                <img src={errorImage} alt='' />
              </div>
              <div className='error-content'>
                <h3 className='error-title'>Page Not Found!</h3>
                <p> Please try searching for some other page.</p>
                <Link className='btn' to='/'>
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
