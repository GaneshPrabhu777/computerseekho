import React from 'react'
import './About.css'

function AboutUs() {
    return (
        <div className="about-container">

            <h1 className="about-header"><b>About Us</b></h1>

            <div class="title-section  col-md-8">
                <br />
                <h1 class="title"><span>Our Origin</span></h1>
                <div class="sub-title">
                    We are a part of Upanagar Shikshan Mandal (USM), a pioneering educational trust in the western suburbs of Mumbai. Commencing in 1956, USM has blossomed into 14 educational institutes that impart quality education from primary school to Post-Graduate courses.
                </div>
            </div>
            <div className="about-content">
                <h3><b>We believe</b></h3>
                <p align="justify">To learn and work successfully in an increasingly information-rich society,
                    one must be able to use technology effectively and creatively. This applies to
                    all strata of society...students, teachers, professionals, homemakers, and senior citizens.</p>

                <div className="course-section">
                    <h3><b>Our Mission</b></h3>
                    <p align="justify">To develop capable users of information technology, who will effectively and creatively use the most
                        amazing machine-a <b>PC!</b></p>
                </div>

                <h3><b>Courses We Offer</b></h3>

                <div class="card-group">
                    <div class="card">

                        <div class="card-body">


                            <h5 class="card-title"><b>Maharashtra State Certificate In Information Technology(MS-CIT)</b></h5>
                            <p class="card-text">As an Authorized Learning Centre of Maharashtra Knowledge Corporation (MKCL) we offer MS-CIT which aims at making the participants smart users of computers by learning Word, Excel, PowerPoint & Internet through practical case studies.</p>

                        </div>
                    </div>



                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title"><b>Post Graduate Diploma in Advanced Computing(PG DAC)</b></h5>
                            <p class="card-text">As an Authorized Training Centre of CDAC's Advanced Computing Training School we offer PG DAC.
                                (C-DAC is the Centre for Development in Advanced Computing, an initiative of the Ministry of IT, Government of India) BE and B.Tech graduates from all across the country are selected for this PG Diploma through C-DAC's All India Common Admission Test.
                                For details : <a href="www.vidyanidhi.com">www.vidyanidhi.com</a></p>

                        </div>
                    </div>



                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title"><b>Post Graduate Diploma in Big Data Analysis(PG DBDA)</b></h5>
                            <p class="card-text">Post Graduate Diploma in Big Data Analytics enables students to explore the fundamental concepts of big data analytics. The theoretical and practical mix of PG-DBDA helps develop in-depth knowledge and understanding of the big data analytic domain.</p>
                        </div>
                    </div>
                </div>




            </div>
        </div>

    );
};

export default AboutUs