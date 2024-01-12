import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Product_detail() {
    const { id } = useParams();
    return (
        <div>
            <Header />
            <h1>Product_detail, Id: {id} </h1>
            <Footer />
        </div>
    );
}
