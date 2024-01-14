import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import facebook_icon from "../../img/followus_facebook_icon.svg";
import instagram_icon from "../../img/followus_instagram_icon.svg";
import tiktok_icon from "../../img/followus_tiktok_icon.svg";
import { Col, Row } from "reactstrap";

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <Row>
                    <Col className="column" sm={6} md={4} lg={3}>
                        <div className="column_title">
                            <p>Product</p>
                        </div>
                        <div className="column_content">
                            <ul>
                                <li>
                                    <li>
                                        <Link to="/eyeglasses">Eyeglasses</Link>
                                    </li>
                                    <li>
                                        <Link to="/sunglasses">Sunglasses</Link>
                                    </li>
                                    <li>
                                        <Link to="/lenses">Lenses</Link>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="column" sm={6} md={4} lg={3}>
                        <div className="column_title">
                            <p>Support</p>
                        </div>
                        <div className="column_content">
                            <ul>
                                <li>
                                    <li>
                                        <Link to="/faqs">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to="/warranty-policy">Warranty Policy</Link>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="column" sm={6} md={4} lg={3}>
                        <div className="column_title">
                            <p>Shop</p>
                        </div>
                        <div className="column_content">
                            <ul>
                                <div className="shopitem">
                                    <li>
                                        <p className="shopname">Ha Noi shop</p>
                                        <p className="shopaddress">97 Tran Đai Nghia, Bach Khoa ward, Hai Ba Trung, Ha Noi</p>
                                        <p className="shopphone">Phone: 090 333 7777</p>
                                    </li>
                                    <a
                                        className="map"
                                        target="_blank"
                                        href="https://www.google.com/maps/place/97+P.+Tr%E1%BA%A7n+%C4%90%E1%BA%A1i+Ngh%C4%A9a,+B%C3%A1ch+Khoa,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0040316,105.8455079,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac7693d9417f:0x3646d830d80f6b29!8m2!3d21.0040316!4d105.8455079!16s%2Fg%2F11f79l62dc?entry=ttu"
                                    >
                                        View map
                                    </a>
                                </div>
                                <div className="shopitem">
                                    <li>
                                        <p className="shopname">Ho Chi Minh shop</p>
                                        <p className="shopaddress">972 Le Thanh Ton, Ben Nghe ward, District 1, Ho Chi Minh</p>
                                        <p className="shopphone">Phone: 090 999 5555</p>
                                    </li>
                                    <a
                                        className="map"
                                        target="_blank"
                                        href="https://www.google.com/maps/place/Vincom+Center+%C4%90%E1%BB%93ng+Kh%E1%BB%9Fi/@10.7784074,106.7020199,17z/data=!3m1!4b1!4m6!3m5!1s0x31752f4876c29a9b:0xd2c79768678d2142!8m2!3d10.7784074!4d106.7020199!16s%2Fg%2F11c0vlm11d?entry=ttu"
                                    >
                                        View map
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </Col>
                    <Col className="column" sm={6} md={4} lg={3}>
                        <div className="column_title">
                            <p>Follow Us</p>
                        </div>
                        <div className="column_content">
                            <ul className="follow">
                                <li>
                                    <img className="facebook_icon" src={facebook_icon} alt="facebook_icon" />
                                </li>
                                <li>
                                    <img className="instagram_icon" src={instagram_icon} alt="instagram_icon" />
                                </li>
                                <li>
                                    <img className="tiktok_icon" src={tiktok_icon} alt="tiktok_icon" />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="copyright">
                <p>Copyright © JINS Eyewear US, Inc. All Rights Reserved</p>
            </div>
        </div>
    );
}
