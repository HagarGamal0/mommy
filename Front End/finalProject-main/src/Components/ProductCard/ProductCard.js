import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './productCard.css'
import { useDispatch } from "react-redux";
import { delProduct, getAllProducts } from "../../Redux/Slices/SellerSlice";
import EditProduct from "../EditProduct/EditProduct";

export default function Sales({item}) {
  const dispatch = useDispatch();
  return (


    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`http://localhost:4000/${item.image}`}  className="product-image"/>
        <Card.Body>
          <Card.Title className="product-title">{item.name}</Card.Title>
          <Card.Text className="product-description">
          {item.description}
          </Card.Text>
          <Card.Text>
          {item.price}$
          </Card.Text>
          <EditProduct product={item} />
          <Button variant="danger" className="me-5" onClick={()=> {
            dispatch(delProduct(item._id)).then(()=> {
              dispatch(getAllProducts());
            })
          }}>حذف</Button>
        </Card.Body>
      </Card>
    </>
  );
}
