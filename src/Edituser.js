import React from 'react';
import { Link } from "react-router-dom";

function Edituser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <label for="inputusername" className="form-label">
            User Name:
          </label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            id="inputusername"
          />
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            id="inputusername"
          />
        </div>
        <div className="col-lg-4">
          <label for="gender" className="form-label">
            Gender:
          </label>
          <select id="gender" className="form-select">
            <option selected>Choose...</option>
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>
        <div className="col-lg-4">
          <label for="dob" className="form-label">
            DOB:
          </label>
          <input type="date" className="form-control" id="dob" />
        </div>
        <div class="col-lg-4">
          <label for="phone" className="form-label">
            Mobile No:
          </label>
          <input type="text" className="form-control" id="phone" />
        </div>
        <div className="col-lg-4">
          <label for="city" className="form-label">
            City:
          </label>
          <select id="city" className="form-select">
            <option selected>Choose...</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </select>
        </div>
        <div className="col-lg-4">
          <label for="state" className="form-label">
            State:
          </label>
          <select id="state" className="form-select">
            <option selected>Choose...</option>
            <option>TamilNadu</option>
            <option>Karnataka</option>
            <option>Telangana</option>
          </select>
        </div>
        <div className="col-lg-4">
          <label for="country" className="form-label">
            Country:
          </label>
          <select id="country" className="form-select">
            <option selected>Choose...</option>
            <option>India</option>
            <option>USA</option>
            <option>Australia</option>
          </select>
        </div>
        <div className="col-lg-4 m-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to={"/portal/user"} type="button" className="btn btn-primary m-2">Back to Users</Link>
        </div>
      </div>
    </div>
  )
}

export default Edituser