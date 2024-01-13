import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import "./product_list.css";

export default function Product_list() {
    return (
        <div>
            <Header />
            <div className="mvImage">
                <img src="https://image.lensmartonline.com/2023-06-15/16868185976393.jpg?imageView2/2/interlace/1/ignore-error/1/format/webp/w/2560" />
            </div>
            <Products />
            <Footer />
        </div>
    );
}
