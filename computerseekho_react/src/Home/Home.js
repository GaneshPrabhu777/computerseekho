import React from 'react';
import { Outlet } from 'react-router-dom';
import Upcourses from './Upcourses';
import Header from '../Header';
import Footer from '../Footer';

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
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <h2>Batch Schedule</h2>
                    </div>
                </div>
                <Upcourses />
            </div>
        </>

    );
}

export default Home;
