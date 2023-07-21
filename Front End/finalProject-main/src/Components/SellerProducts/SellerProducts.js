import React,{useEffect} from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Slices/SellerSlice";




export default function SellerProducts() {
 
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts());
    }, [])
    const {products} = useSelector(state => state.SellerSlice);
    console.log(products)

   

  return (
    <>
      <div className="col-lg-9 mx-5">
        <div className="d-flex flex-wrap justify-content-start gap-4">
          {products.map((item,index)=>{
            return  <ProductCard key={index} item={item} />
          })}
        </div>
      </div>
    </>
  );
}
