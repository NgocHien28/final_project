import React from "react";
import logo from "../../img/JINS logo.svg";
import { Link } from "react-router-dom";
import "./header.css";
import search_icon from "../../img/Menu_icon_search.svg";
import user_icon from "../../img/user_gray.svg";
import cart_icon from "../../img/cart_gray.svg";
import { Container } from "reactstrap";

export default function Header() {
    return (
        <Container>
            <div className="header">
                <div className="nav">
                    <div className="logo">
                        <img src={logo} alt="JINS logo" />
                    </div>
                    <div className="menubar">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/eyeglasses">Eyeglasses</Link>
                            </li>
                            <li>
                                <Link to="/sunglasses">Sunglasses</Link>
                            </li>
                            <li>
                                <Link to="/lenses">Lenses</Link>
                            </li>
                            <li>
                                <Link to="/about-jins">About JINS</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>

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
                </div>
            </div>
        </Container>
    );
}
