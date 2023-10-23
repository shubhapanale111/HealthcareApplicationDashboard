import React, { useState } from 'react';
import {
    FaTh,
    FaChevronCircleLeft,
    FaChevronCircleRight, // Add FaChevronCircleRight icon
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";

import { NavLink } from 'react-router-dom';
import "../components/sidebar.css"

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/about",
            name: "Patients",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "HealthRecords",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Prescriptions",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Invenstigations",
            icon: <FaShoppingBag />
        },
        {
            path: "/productList",
            name: "Contact us",
            icon: <FaThList />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none", fontSize: '22px' }} className="logo">@EHR Safe</h1>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))}
                <div className="bottom_section">
                    <div style={{ marginLeft: isOpen ? "150px" : "0px" }} className="bars">
                        {isOpen ? (
                            <FaChevronCircleLeft onClick={toggle} />
                        ) : (
                            <FaChevronCircleRight onClick={toggle} />
                        )}
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
