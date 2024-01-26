import React, { useState } from "react";
import logo from "../../img/JINS logo.svg";
import "./header.css";
import search_icon from "../../img/Menu_icon_search.svg";
import user_icon from "../../img/user_gray.svg";
import cart_icon from "../../img/cart_gray.svg";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar expand="md">
                <NavbarBrand href="/">
                    <img src={logo} alt="JINS logo" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/products">Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about_us">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <div className="right">
                            <div className="search_area">
                                <input type="text" placeholder="Search..." />
                                <img className="search_icon" src={search_icon} alt="search_icon" />
                            </div>
                            <div className="right_icon">
                                <img className="user_icon" src={user_icon} alt="user_icon" />
                                <img className="cart_icon" src={cart_icon} alt="cart_icon" />
                            </div>
                        </div>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
