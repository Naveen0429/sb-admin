import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

function Productcreate() {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productDetails: "",
      price: "",
      image: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.productName) {
        error.productName = "*Required";
      }
      if (
        values.productName &&
        (values.productName.length < 3 || values.productName.length > 51)
      ) {
        error.productName = "Product Name Must between 3 to 50 characters";
      }

      if (!values.image) {
        error.image = "*Required";
      }

      if(values.productDetails && (values.productDetails.length < 20 || values.productDetails.length > 301)){
        error.productDetails = "Chracters must between 21 to 300"
      }

      if(!values.price){
        error.price = "*Required"
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let dataProduct = await axios.post(
          "https://634a1f0633bb42dca4fe8c1d.mockapi.io/api/product/products",
          values
        );
        alert("Product created Successfully!!");
        console.log(dataProduct);
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <h3>Create-Product Details</h3>
          <div className="col-lg-6">
            <label for="inputusername" className="form-label mt-2">
              Product Name<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="productName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
              type="text"
              className={`form-control ${
                formik.errors.productName ? "error-box" : ""
              } ${
                formik.touched.productName && !formik.errors.productName
                  ? "success-box"
                  : ""
              }`}
              placeholder="Product name"
              aria-label="Product name"
              id="inputusername"
            />
            {formik.touched.productName && formik.errors.productName ? (
              <span style={{ color: "red" }}>{formik.errors.productName}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label for="inputurl" className="form-label mt-2">
              Product Img-url<span style={{ color: "red" }}>*</span>:
            </label>
            <input
              name="image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
              type="text"
              className={`form-control ${
                formik.errors.image ? "error-box" : ""
              } ${
                formik.touched.image && !formik.errors.image
                  ? "success-box"
                  : ""
              }`}
              placeholder="Img-url-here"
              aria-label="Img-url-here"
              id="inputurl"
            />
            {formik.touched.image && formik.errors.image ? (
              <span style={{ color: "red" }}>{formik.errors.image}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <div class="input-group mt-2">
              <span class="input-group-text">Product Details:</span>
              <textarea
              name="productDetails"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productDetails}
                class={`form-control ${
                    formik.touched.productDetails && formik.errors.productDetails ? "error-box" : ""
                  } ${
                    formik.touched.productDetails && !formik.errors.productDetails
                      ? "success-box"
                      : ""
                  }`}
                aria-label="With textarea"
              ></textarea>{formik.touched.productDetails && formik.errors.productDetails ? (
                <span style={{ color: "red" }}>{formik.errors.productDetails}</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <label for="basic-url" class="form-label mt-2">
            Product Price : ₹
          </label>
          <div class="input-group">
            <input
            name="price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              class={`form-control ${
                formik.touched.price && formik.errors.price ? "error-box" : ""
              } ${
                formik.touched.price && !formik.errors.price
                  ? "success-box"
                  : ""
              }`}
              aria-label="Amount (to the nearest dollar)"
              id="basic-url"
            />
            <span class="input-group-text">.00</span>
            {formik.touched.price && formik.errors.price ? (
                <span style={{ color: "red" }}>{formik.errors.price}</span>
              ) : null}
          </div>
        </div>
        <div className="col-lg-4 m-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to={"/portal/product"} type="button" className="btn btn-primary m-2">
            Back to Product
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Productcreate;