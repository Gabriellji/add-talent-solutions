import { NavLink, Link } from "react-router-dom";
import dashboardImg from "./icons/dashboard.png";
import shopping from "./icons/shopping.png";
import customer from "./icons/customer.png";

import "./style.scss";

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="nav-inner_wrap">
        <NavLink to="/home" >
          <img src={dashboardImg} alt="dashboard icon"></img>
        </NavLink>
        <NavLink to="/customer">
          <img src={customer} alt="customer icon"></img>
        </NavLink>
        <NavLink to="/shopping">
          <img src={shopping} alt="shopping list icon"></img>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
