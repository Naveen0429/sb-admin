import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Productcard from "./Productcard";

function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    productDetails();
  }, []);

  let productDetails = async () => {
    try {
      setLoading(true);
      let productData = await axios.get(
        "https://634a1f0633bb42dca4fe8c1d.mockapi.io/api/product/products"
      );
      console.log(productData.data);
      setProduct(productData.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <div className="container-fluid">
      <header class="bg-dark py-1">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Products</h1>
            <Link
              to={"/portal/product_create"}
              className="d-none d-sm-inline-block btn btn-md btn-primary shadow-md"
            >
              Create Product
            </Link>
          </div>
        </div>
      </header>
      {isLoading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <section class="py-1">
          <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {product.map((item) => {
                return <Productcard item={item} />;
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Product;