import React from "react";
import user from "../../Assets/user/user.png";
import logo from "../../Assets/logos/horizontal logo.png";
import "../style/AdminNavbar.css";
const AdminNavbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="ieee logo" />
          </div>
          <div className="admin-data">
            <h2 className="admin-name">Ali muhammed</h2>
            <div className="admin-img">
              <img src={user} alt="admin-img" />
            </div>
            <button className="main-btn logout-btn">Logout</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;
