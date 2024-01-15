import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./product_detail.css";
import { Col, Row } from "reactstrap";
import Imageslide from "../../components/imageslide/Imageslide";

export default function Product_detail() {
    const { id } = useParams();
    return (
        <div>
            <Header />
            <h1>Product_detail, Id: {id} </h1>
            <div className="product_detail">
                <div className="product_intro">
                    <div className="left">
                        <Imageslide />
                    </div>
                    <div className="right">
                        <p>Thông tin mô tả về sản phẩm</p>
                    </div>
                </div>
                <div className="product_feature">
                    <h3 className="titleh3">Features of our product</h3>
                    <Row className="features">
                        <Col sm={12} md={6} lg={4}>
                            <div className="feature_tab">
                                <h6>DESIGNED IN TOKYO</h6>
                                <p>We've been designing eyewear from our offices in Tokyo since our start in 2001.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="feature_tab">
                                <h6>DEDICATED TO QUALITY</h6>
                                <p>Each of our frames is thoroughly inspected by a third party to guarantee the highest quality.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="feature_tab">
                                <h6>BEST LENSES BY DEFAULT</h6>
                                <p>We offer high-index lenses, aspheric lenses, anti-glare and UV-cut coatings at no additional charge.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="product_description">
                    <h3 className="titleh3">Description of product</h3>
                    <p>
                        Each JINS order ships for free and comes with a 30-day return policy and a 1-year limited warranty. Orders also include a complimentary worry-free adjustment service at any
                        JINS Store.
                    </p>
                </div>
                <div className="product_related"></div>
            </div>
            <Footer />
        </div>
    );
}
