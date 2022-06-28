import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import image from "../../Assets/Images/avatar.png";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ sidebarOpen, openSidebar }) => {
    let navigate = useNavigate()
    const logout = () => {
        window.localStorage.clear();
        navigate("/")
        window.location.reload();

    }
    return (
        <div className="navbar">
            {/* <div className="navIcon" >
                <FaBars onClick={() => openSidebar()} />
            </div> */}
            <FaBars onClick={() => openSidebar()} />
            {/* <div className="navbar__left">
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a className="active_link" href="#">
                    Admin
                </a>
            </div> */}
            <div className="navbar__right float-right">
                {/* <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                       rejaul karim shohag
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

                <div className="dropdownDiv">
                   <h6>rejaul karim</h6>
                    <div className="dropdown-content">
                        <a onClick={logout}>Logout</a>
                        
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;