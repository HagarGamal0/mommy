import React from "react";
import CheckOutStyle from "./CheckOut.module.css";
import Address from "../Components/ChecOut/Adress/Address";
import Payment from "../Components/ChecOut/Payment/Payment";
import Summary from "../Components/ChecOut/Summary/Summary";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export default function CheckOut() {
  const { shippingAdress } = useSelector((state) => state.OrderSlice);;
  const [render,setRedner] = useState(<Address />);
  useEffect(()=> {
   
    if(Object.keys(shippingAdress).length !== 0 ) {
      setRedner(<Payment />)
    }
  },[shippingAdress])
  return (
    <section className={`container ${CheckOutStyle.checkout}`}>
      <div className={CheckOutStyle.checkout_container}>
     {render}
      </div>
      <div className={CheckOutStyle.order_view}>
        <Summary />
      </div>
    </section>
  );
}
