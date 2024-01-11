import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Product_detail from "../product_detail/Product_detail";

export default function Products() {
    const [data, setData] = useState([]);
    const url = "https://659ac0f6652b843dea53f249.mockapi.io/list";
    useEffect(() => {
        axios.get(url).then(function (res) {
            setData(res.data);
        });
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Product_detail key={index} product={item} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}
