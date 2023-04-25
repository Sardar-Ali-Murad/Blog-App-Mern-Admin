import React from "react";
import Logo from "../../assets/icons/logo.svg";
import "./sidebar.css";
import Logout from "../Logout/index";
import { Link } from "react-router-dom";
// Mui imports

const index = () => {
  let [activeIndex, setActiveIndex] = React.useState(
    JSON.parse(sessionStorage.getItem("activeIndex")) || 0
  );
  React.useEffect(() => {
    sessionStorage.setItem("activeIndex", JSON.stringify(activeIndex));
  }, [activeIndex]);
  return (
    <div className="sidebarMain">
      <img src={Logo} className="sideBarLogo" />
      <div className="sidebar">
        <Link to="/home">
          <div
            variant="soft"
            className={`itemBox ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => setActiveIndex(0)}
          >
            <p>Witers</p>
          </div>
        </Link>
        <Link to="/home/blog">
          <div
            variant="soft"
            className={`itemBox ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            <p>Blogs</p>
          </div>
        </Link>
        <Link to="/home/query">
          <div
            variant="soft"
            className={`itemBox ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => setActiveIndex(2)}
          >
            <p>Queries</p>
          </div>
        </Link>
        <Logout />
      </div>
    </div>
  );
};

export default index;
