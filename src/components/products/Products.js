import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Product_detail from "../product_detail/Product_detail";
import img1 from "../../img/product_1.jpg";
import img2 from "../../img/product_2.jpg";
import img3 from "../../img/product_3.jpg";
import img4 from "../../img/product_4.jpg";
import img5 from "../../img/product_5.jpg";
import img6 from "../../img/product_6.jpg";
import img7 from "../../img/product_7.jpg";
import img8 from "../../img/product_8.jpg";
import img9 from "../../img/product_19.jpg";
import img10 from "../../img/product_10.jpg";
import img11 from "../../img/product_11.jpg";
import img12 from "../../img/product_12.jpg";
import img13 from "../../img/product_13.jpg";
import img14 from "../../img/product_14.jpg";
import img15 from "../../img/product_15.jpg";
import img16 from "../../img/product_16.jpg";
import img17 from "../../img/product_17.jpg";
import img18 from "../../img/product_18.jpg";
import img19 from "../../img/product_19.jpg";
import img20 from "../../img/product_20.jpg";
import img21 from "../../img/product_21.jpg";
import img22 from "../../img/product_22.jpg";
import img23 from "../../img/product_23.jpg";
import img24 from "../../img/product_24.jpg";
import img25 from "../../img/product_25.jpg";
import img26 from "../../img/product_26.jpg";
import img27 from "../../img/product_27.jpg";
import img28 from "../../img/product_28.jpg";
import img29 from "../../img/product_29.jpg";
import img30 from "../../img/product_30.jpg";
import img31 from "../../img/product_31.jpg";
import img32 from "../../img/product_32.jpg";
import img33 from "../../img/product_33.jpg";
import img34 from "../../img/product_34.jpg";
import img35 from "../../img/product_35.jpg";
import img36 from "../../img/product_36.jpg";
import img37 from "../../img/product_37.jpg";
import img38 from "../../img/product_38.jpg";
import img39 from "../../img/product_39.jpg";
import img40 from "../../img/product_40.jpg";

export default function Products() {
    const [data, setData] = useState([]);
    const url = "https://659ac0f6652b843dea53f249.mockapi.io/list";
    useEffect(() => {
        axios.get(url).then(function (res) {
            setData(res.data);
        });
    }, []);
    let arr = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40,
    ];
    return (
        <div>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Product_detail key={index} product={item} img={arr[index]} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}
