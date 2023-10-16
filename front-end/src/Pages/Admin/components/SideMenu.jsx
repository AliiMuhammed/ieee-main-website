import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../style/sideMenu.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
// import { getAuthUser, removeAuthUser } from "../../../Helper/Storage";
import { useNavigate } from "react-router-dom";
import { MdElectricalServices } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import imgProfile from "../../../Assets/user/user.png";
function SideMenu({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleClose = () => {
    setShow(false);
    setShowSubMenu(false);
  };
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  // const auth = getAuthUser();
  const LogOut = () => {
    // removeAuthUser();
    // navigate("/");
  };

  // const admin = getAuthUser();

  return (
    <>
      <Link
        onClick={handleShow}
        to={"/admin/dashboard"}
        className="sideMenu-icon"
      >
        <FaBars />
      </Link>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="sideMenu-header">
            IEEE HSB DashBoard
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="links-sideMenu">
            <div className="admin-data sideMenu-adminData">
              <div className="admin-img">
                <img
                  src={
                    // admin.image === "" ? imgProfile : admin.image
                    imgProfile
                  }
                  alt=""
                />
              </div>
              <div className="admin-name">
                {/* <span>{admin.name}</span> */}
                <span>Ali Muhammed</span>
              </div>
            </div>
            <Link to={"/admin"} onClick={handleClose}>
              <div className="icon">
                <RiDashboardFill />
              </div>
              Statistics
            </Link>
            <Link to={"/admin/users"} onClick={handleClose}>
              <div className="icon">
                <IoIosPeople />
              </div>
              Users
            </Link>
            <Link to={"/admin/services"} onClick={handleClose}>
              <div className="icon">
                <MdElectricalServices />
              </div>
              Services
            </Link>
            <Link to={"/admin/about-us"} onClick={handleClose}>
              <div className="icon">
                <AiFillInfoCircle />
              </div>
              About Us
            </Link>
            <Link to={"/admin/contact-us"} onClick={handleClose}>
              <div className="icon">
                <FaPhone />
              </div>
              Contact Us
            </Link>
            <div className="drop-down">
              <div onClick={toggleSubMenu} className="drop-down-link">
                <div className="icon">
                  <AiFillHome />
                </div>
                Home
              </div>
              <div className={`sub-menu ${showSubMenu ? "open" : ""}`}>
                <NavLink
                  to="/admin/dashboard/home/slogan"
                  onClick={handleClose}
                >
                  Slogan
                </NavLink>
                <NavLink to="/admin/dashboard/home/video" onClick={handleClose}>
                  Video
                </NavLink>
                <NavLink
                  to="/admin/dashboard/home/family"
                  onClick={handleClose}
                >
                  Family
                </NavLink>
                <NavLink
                  to="/admin/dashboard/home/achievements"
                  onClick={handleClose}
                >
                  Achievements
                </NavLink>
                <NavLink
                  to="/admin/dashboard/home/partners"
                  onClick={handleClose}
                >
                  Partners
                </NavLink>
                <NavLink
                  to="/admin/dashboard/home/testimonials"
                  onClick={handleClose}
                >
                  Testimonials
                </NavLink>
              </div>
            </div>
          </div>

          {/* Authenticated Routes */}
          {/* {auth */}
          {true && (
            <NavLink
              className=" main-btn admin-LogoutBtn"
              onClick={LogOut}
              to={"/"}
            >
              log out
            </NavLink>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideMenu;
