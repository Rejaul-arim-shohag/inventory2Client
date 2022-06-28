import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";
import { FcPositiveDynamic } from "react-icons/fc";
import { MdPeople } from "react-icons/md";
import { MdOutlineClearAll } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa";
import { IoMdReturnRight } from "react-icons/io";
import { BsNodePlusFill } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoIosMap } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { MdOutlineInsertChart } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
    return (
        <div className={sidebarOpen ? "sidebar_responsive":""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <h3 className="text-center"><FcPositiveDynamic className="logoIcon"/> INVENTO</h3>
                </div> 
                <AiOutlineClose aria-hidden="true" onClick={() => closeSidebar()}/>  
            </div>

            <div className="sidebar__menu">
                <div className={"sidebar__link" + (url === "/dashboard" ?" active" : "")}>
                    <AiTwotoneHome />
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className={"sidebar__link" + (url === "/createPurchase" ?" active" : "")}>
                    <AiTwotoneHome />
                    <Link to="/createPurchase">Purchase Create</Link>
                </div>
                <div className={"sidebar__link" + (url === "/allPurchase" ?" active" : "")}>
                    <AiTwotoneHome />
                    <Link to="/allPurchase">Purchases</Link>
                </div>
                <div className={"sidebar__link" + (url === "/customers" ?" active" : "")}>
                    <MdPeople />
                    <Link to="/customers">Customers</Link>
                    
                </div>
                <div className={"sidebar__link" + (url === "/sell/add-Sell" ?" active" : "")}>
                    <FaCartArrowDown />
                    <Link to="/sell/add-Sell">Add-Sell</Link>
                </div>

                <div className={"sidebar__link" + (url === "/sell/sellList" ?" active" : "")}>
                    <FaSellsy />
                    <Link to="/sell/sellList">Sells List</Link>
                </div>

                <div className={"sidebar__link" + (url === "/sell/return" ?" active" : "")}>
                    <IoMdReturnRight />
                    <Link to="/sell/return">Return</Link>
                </div>

                <div className={"sidebar__link" + (url === "/return/add-return" ?" active" : "")}>
                    <BsNodePlusFill />
                    <Link to="/return/add-return">Add-return</Link>
                </div>

                <div className={"sidebar__link" + (url === "/products" ?" active" : "")}>
                    <MdProductionQuantityLimits />
                    <Link to="/products">Products</Link>
                </div>   

                <div className={"sidebar__link" + (url === "/brand" ?" active" : "")}>
                    <IoIosMap/>
                    <Link to="/brand">Brand</Link>
                </div>

                <div className={"sidebar__link" + (url === "/createCategory" ?" active" : "")}>
                    <MdCategory />
                    <Link to="/createCategory">Category</Link>
                </div>

                <div className={"sidebar__link" + (url === "/suppliers" ?" active" : "")}>
                    <MdOutlineInsertChart />
                    <Link to="/suppliers">Suppliers</Link>
                </div>

                <div className={"sidebar__link" + (url === "/expense" ?" active" : "")}>
                    <IoIosCreate />
                    <Link to="/expense">Expense Types</Link>
                </div>

                <div className={"sidebar__link" + (url === "/expenseList" ?" active" : "")}>
                    <GiExpense />
                    <Link to="/expenseList">Expense List</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;