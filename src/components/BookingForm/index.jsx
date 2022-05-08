import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

BookingForm.propTypes = {};

function BookingForm(props) {
  return (
    <div>
      <div className="booking-page">
        {/* header-booking-form */}
        <div className="header-booking-form">
          <img
            src="https://preview.eagle-themes.com/html/zante/images/slider/slider-1.jpg"
            alt=""
          />
          <div className="content">
            <h1>Booking Form</h1>
            <div className="sub-title">
              <span>
                <a href="/">Home</a>
              </span>
              <span>/</span>
              <span>Booking Form</span>
            </div>
          </div>
        </div>

        {/* booking-form */}

        <div className="container">
          <div className="body-booking-page container">
            <div className="left-page">
              <h1 className="title">BOOK ONLINE</h1>
              <div className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <span className="form-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your Email Address"
                    className="form-control"
                  />
                  <span className="form-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    className="form-control"
                  />
                  <span className="form-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="">Room Type</label>
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                  <select
                    name="booking-roomtype"
                    class="form-control"
                    title="Room Type"
                    data-header="Room Type"
                  >
                    <option selected disabled>
                      Room Type
                    </option>
                    <option value="Single">Single Room</option>
                    <option value="Double">Double Room</option>
                    <option value="Deluxe">Deluxe Room</option>
                  </select>
                </div>

                <div className="form-group date date-arrival">
                  <label htmlFor="">Date Arrival</label>
                  <input
                    id="email"
                    name="email"
                    type="date"
                    placeholder="Date Arrival"
                    className="form-control"
                  />
                </div>
                <div className="form-group date date-departure">
                  <label htmlFor="">Date Departure</label>
                  <input
                    id="email"
                    name="email"
                    type="date"
                    placeholder="Date Departure"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Adults</label>
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                  <select
                    name="booking-roomtype"
                    class="form-control"
                    title="Room Type"
                    data-header="Room Type"
                  >
                    <option selected disabled>
                      Adults
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="">Children</label>
                  <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                  <select
                    name="booking-roomtype"
                    class="form-control"
                    title="Room Type"
                    data-header="Room Type"
                  >
                    <option selected disabled>
                      Children
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="form-group comment">
                  <label htmlFor="">Your Comment</label>
                  <form action="">
                    <textarea name="" id="" cols="30" rows="10">
                      Your Comment
                    </textarea>
                  </form>
                </div>
              </div>
            </div>
            <div className="right-page">
              <div className="special-offer">
                <h1 className="title">SPECIAL OFFERS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
