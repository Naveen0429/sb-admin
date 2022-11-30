import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function Usercreate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      dob: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      country: "",
    },

    validate: (values) => {
      let error = {};

      if (!values.name) {
        error.name = "*Required";
      }
      if (values.name && (values.name.length < 3 || values.name.length > 15)) {
        error.name = "Username must be 3 to 14 characters";
      }

      if(!values.email){
        error.email = "Please enter the email address";
      }
      if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = "Invalid email address";
      }

      if(!values.phone){
        error.phone = "*Required";
      }
      if(values.phone && values.phone.toString().length !== 10){
        error.phone = "Please enter valid phone number"
      }

      console.log(values.dob);
      console.log(typeof values.dob);
      console.log(values.dob.split("-")[0]);
      let age= new Date().getFullYear() - parseInt(values.dob.split("-")[0])
      console.log(age);
      if(age < 18){
        error.dob = "You must be above 18"
      }
      return error;
    },

    onSubmit: async (values) => {
      try {
        const dataUser = await axios.post(
          "https://5cdd0a92b22718001417c19d.mockapi.io/api/users",
          values
        );
        alert("Success");
      } catch (error) {}
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label for="inputusername" className="form-label">
              User Name<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              type="text"
              className={`form-control ${
                formik.errors.name ? "error-box" : ""
              } ${
                formik.touched.name && !formik.errors.name ? "success-box" : ""
              } `}
              placeholder="User name"
              aria-label="User name"
              id="inputusername"
            />
            {formik.errors.name ? (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label for="inputemail" className="form-label">
              Email<span style={{ color: "red" }}>*</span>:
            </label>

            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="text"
              className={`form-control ${
                formik.touched.email && formik.errors.email ? "error-box" : ""
              } ${
                formik.touched.email && !formik.errors.email ? "success-box" : ""
              } `}
              placeholder="Email"
              aria-label="Email"
              id="inputusername"
            />
              {formik.touched.email && formik.errors.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="gender" className="form-label">
              Gender:
            </label>
            <select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              id="gender"
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label for="dob" className="form-label">
              DOB<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="dob"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
              type="date"
              min={"1990-01-01"}
              max={"2010-01-01"}
              className={`form-control ${
                formik.errors.dob ? "error-box" : ""
              } ${
                formik.touched.dob && !formik.errors.dob ? "success-box" : ""
              } `}
              id="dob"
            />
             {formik.touched.dob && formik.errors.dob ? (
              <span style={{ color: "red" }}>{formik.errors.dob}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="phone" className="form-label">
              Phone<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              type="number"
              className={`form-control ${
                formik.touched.email && formik.errors.phone ? "error-box" : ""
              } ${
                formik.touched.phone && !formik.errors.phone ? "success-box" : ""
              } `}
              id="phone"
            />
            {formik.touched.email && formik.errors.phone ? (
              <span style={{ color: "red" }}>{formik.errors.phone}</span>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label for="city" className="form-label">
              City:
            </label>
            <select
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              id="city"
              className="form-select"
            >
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
            <select
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
              id="state"
              className="form-select"
            >
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
            <select
              name="country"
              onChange={formik.handleChange}
              value={formik.values.country}
              id="country"
              className="form-select"
            >
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
            <Link to={"/portal/user"} type="button" className="btn btn-primary m-2">
              Back to Users
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;