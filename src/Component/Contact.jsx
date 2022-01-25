import React from "react";
import Hoc from "./Hocs/Hoc";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="mb-5 mt-5 text-center">
          <h3>Contact Us</h3>
          <h4>Let's Start The Contact Us</h4>
        </div>
        <div className="row">
          <div className="col-lg-5 col-sm-12 mb-5 mt-5">
            <div className="contact-info">
              <h4>Contact Info</h4>
              <span className="d-flex text-align-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, debitis?
              </span>
              <span className="d-flex text-align-center">
              <strong>Phone Num : 01756808137</strong>
              </span>
              <span className="d-flex text-align-center">
                <strong>Email : nerob0000@gmail.com</strong>
              </span>
            </div>
          </div>

          <div className="col-lg-7 col-sm-12">
            <div className="form-group">
              <label htmlFor="/">Name :</label>
              <input type="text" placeholder=" Enter Your Name" />
              <label htmlFor="/">Email :</label>
              <input type="email" placeholder="Enter Your Email " />
              <br />
              <br />
              <textarea
                name=""
                id=""
                cols="60"
                rows="5"
                placeholder="Enter Your Message"
              ></textarea>
              <br />
              <button className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoc(Contact);
