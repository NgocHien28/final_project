import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Button } from "reactstrap";
import "./product_detail.css";
export default function Product_detail(props) {
    const { product } = props;

    return (
        <Col sm={6} md={4} lg={3}>
            <div className="product_detail">
                <Link to={`/product/${product.id}`}>
                    <Card>
                        <img alt="Sample" src="https://image.lensmartonline.com/2023-08-29/16932903337954.jpg?imageView2/2/interlace/1/ignore-error/1/format/webp/w/960" />
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardSubtitle className="mb-2" tag="h5">
                                ${product.price}
                            </CardSubtitle>
                            <div className="color_group">
                                <div className="color color1"></div>
                                <div className="color color2"></div>
                                <div className="color color3"></div>
                            </div>
                            <Button>ADD TO CART</Button>
                        </CardBody>
                    </Card>
                </Link>
            </div>
        </Col>
    );
}
