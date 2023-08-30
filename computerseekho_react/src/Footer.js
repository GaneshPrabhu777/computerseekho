import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="footer-heading">Computer Seekho</h2>
            <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer-social-icons">
              <a href="#"><i className="fa fa-facebook-square"></i></a>
              <a href="#"><i className="fa fa-linkedin-square"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading">Links</h4>
            <ul className="footer-links">
              <li><a href="About">About Us</a></li>
              <li><a href="Placement">Placement</a></li>
              <li><a href="gallery">Gallery</a></li>
              <li><a href="Contactus">Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading">Location</h4>
            <p className="footer-text">
              5th Floor, Vidyanidhi Education Complex,
              Vidyanidhi Road, Juhu Scheme Andheri (W), Mumbai 400 049 India
            </p>
            <p className="footer-contact">
              Mobile: 9029435311 / 9324095272 / 9987062416 <br />
              Email: training@vidyanidhi.com
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center">
              <small className="footer-copy">&copy; 2023. All Rights Reserved. Group 3</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
