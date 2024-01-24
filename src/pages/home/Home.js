import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import img1 from "../../img/product_1.jpg";
import img2 from "../../img/product_2.jpg";
import img3 from "../../img/product_3.jpg";
import img4 from "../../img/product_4.jpg";
import img5 from "../../img/product_5.jpg";
import img6 from "../../img/product_6.jpg";
import img7 from "../../img/product_7.jpg";
import img8 from "../../img/product_8.jpg";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Product_detail from "../../components/product_detail/Product_detail";
import Blog_item from "../../components/blog_item/Blog_item";
export default function Home() {
    const [data, setData] = useState([]);
    const url = "https://659ac0f6652b843dea53f249.mockapi.io/list";
    useEffect(() => {
        axios.get(url).then(function (res) {
            setData(res.data);
        });
    }, []);
    let arr = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <div>
            <Header />
            <div id="info">
                <Container>
                    <h2>NEW ARRIVAL</h2>
                    <Row>
                        {data.slice(0, 4).map((item, index) => (
                            <Product_detail key={index} product={item} img={arr[index]} />
                        ))}
                    </Row>
                </Container>
            </div>
            <Blog_item />
            <Footer />
        </div>
    );
}
