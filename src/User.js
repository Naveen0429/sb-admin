import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    userDetails();
  }, []);

  let userDetails = async () => {
    try {
      setLoading(true);
      let user = await axios.get(
        "https://5cdd0a92b22718001417c19d.mockapi.io/api/users"
      );
      console.log(user.data);
      setUser(user.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  let deleteProfile = () => {
    let confirm = window.confirm("Do you want to delete this profile?");
    if (confirm) {
      alert("Profile Deleted !");
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/portal/user_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Create User
        </Link>
      </div>
      {isloading ? (
        <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Active</th>
                  </tr>
                </tfoot>
                <tbody>
                  {user.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.dob}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>{item.country}</td>
                        <td>
                          <Link
                            to={`/portal/profile/${item.id}`}
                            type="button"
                            className="btn btn-info mr-1"
                          >
                            Profile
                          </Link>
                          <Link
                            to={`/portal/edit_user/${item.id}`}
                            type="button"
                            className="btn btn-warning mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              deleteProfile();
                            }}
                            type="button"
                            className="btn btn-danger mr-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
