import "./App.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import User from "./User";
import Usercreate from "./Usercreate";
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import Edituser from "./Edituser";
import Product from "./Product";
import Productcreate from "./Productcreate";
import { useContext } from "react";
import { UserContext } from "./Usercontext";
import Login from "./Login";
import PortalLayout from "./PortalLayout";

function App() {
  const { username, setUsername } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="product" element={<Product />} />
          <Route path="user_create" element={<Usercreate />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="edit_user/:id" element={<Edituser />} />
          <Route path="product_create" element={<Productcreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;