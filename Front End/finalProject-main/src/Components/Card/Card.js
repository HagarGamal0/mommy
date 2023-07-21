import React, { useEffect } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCartItems,
  getProductById,
  updateCartItem,
} from "../../Redux/Slices/ProductSlice";
import { NavLink } from "react-router-dom";

function Card(props) {
  const { product } = props;
  const api = "http://localhost:4000/";
  const isLoggedIn = useSelector((state) => state.UserSlice.isLoggedIn);
  const { _id } = useSelector((state) => state.UserSlice.user) || "";
  const { cartItems } = useSelector((state) => state.ProductSlice);

  const dispatch = useDispatch();
  const item = product;

  function increaseQuantity(quantity, itemId) {
    dispatch(updateCartItem({ quantity, itemId })).then(()=> {
      dispatch(getCartItems(_id));
    });

  }

  function handleAddToCart() {

    let quantity = 1;
    const product = item._id;
    const user = _id;
    let isExist = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]._id === item._id) {
        isExist = true;
        quantity = cartItems[i].quantity;
        break;
      }
    }

    if (isExist) {
      try{
        quantity += 1;
        increaseQuantity(quantity, product).then(()=>{
          dispatch(getCartItems(_id));
        });
      }catch(error){
        console.log(error)
      }
      
    } else {
      try{
        dispatch(addToCart({ quantity, product, user })).then(()=> {
          dispatch(getCartItems(_id));
        });
      }catch(error) {
        console.log(error)
      }
    }

  }

  return (
    <div className="product-info">
      <NavLink
        to={`/${product._id}`}
        className="nav-link"
        onClick={() => {
          dispatch(getProductById(product._id));
        }}
      >
        <img src={`${api}${product.image}`} alt="Product-img" />
        <p className="title">{product.name}</p>
        <p className="description">{product.description}</p>
        <p>EGP {product.price}</p>
      </NavLink>
      <button
        type="button"
        className="btn btn-outline "
        onClick={handleAddToCart}
        
      >
        اضف الى العربة
      </button>
    </div>
  );
}

export default Card;
/* <div className="rate">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div> */
