import React from "react";

function Productcard({ item }) {
  {
    
      return (
        <div class="col mb-5">
          <div class="card h-100">
            <img
              class="card-img-top"              
              src={item.image}
              alt="..."
            />

            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">{item.productName}</h5>
                ₹{item.price}
              </div>
            </div>

            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">
                  View Details
                </a>
              </div>
              <div class="text-center">
                <a class="btn btn-outline-warning mt-1 mr-1" href="#">
                  Edit
                </a>
                <a class="btn btn-outline-danger mt-1" href="#">
                  Delete
                </a>
              </div>           
                
            
            </div>
          </div>
        </div>
      );
    };
 
}

export default Productcard;