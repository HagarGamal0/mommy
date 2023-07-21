import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import TestImage from "../../images/main/baby.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from "react-redux";


export default function Sales() {
    const {products} = useSelector(state => state.SellerSlice)
  return (
    <Container className="my-5 py-">
      <h1 className="text-center mb-5"> الاعلى مبيعاً</h1>

      <Row className="gy-2">
        <Col xl="3" lg="4" sm="12" md="6">
        <ProductCard image={TestImage} />
        </Col>
        <Col xl="3" lg="4" sm="12" md="6">
        <ProductCard image={TestImage} />
        </Col>
        <Col xl="3" lg="4" sm="12" md="6">
        <ProductCard image={TestImage} />
        </Col>
        <Col xl="3" lg="4" sm="12" md="6">
        <ProductCard image={TestImage} />
        </Col>
  
      </Row>
    </Container>
  );
}
