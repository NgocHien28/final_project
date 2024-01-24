import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";

export default function Blog_item() {
    const data=[
        {
            id:1,
            title:"Blog Post Title",
            publish_date:"22/01/2024",
            blogcontent:"Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet,..."
        },
        {
            id:2,
            title:"Blog Post 2",
            publish_date:"10/01/2024",
            blogcontent:"Introduce about new function. Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet,..."
        },
        {
            id:3,
            title:"Blog Post 3",
            publish_date:"15/11/2023",
            blogcontent:"New collection in summer 2024. Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet,..."
        },
    ]
    return (
        <Container>
            <h2 className="text-center">BLOGS</h2>
            <Row>
        {
            data.map((item,index)=>(
                <Col sm={6} lg={4} key ={index}>
                     <Card>
                        <img alt="Sample" src="https://picsum.photos/300/200" />
                        <CardBody>
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                {item.publish_date}
                            </CardSubtitle>
                            <CardText>{item.blogcontent}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))
        }
       </Row>   
        </Container>
       
    );
}
