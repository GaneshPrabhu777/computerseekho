import React from 'react';
import { Outlet } from 'react-router-dom';
import Upcourses from './Upcourses';

function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img
                            src="images/main.png"
                            alt="Main"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="blinking-line text-center">
                    <div>Special Offer for Early Admissions</div>
                </div>
                <div className="row mt-5">

                    <div className="col-md-12 text-center">
                        <h2>Upcoming Batch Schedule</h2>
                    </div>
                </div>
                <Upcourses />

            </div>
        </>

    );
}

export default Home;
