import React from "react";
import doneStyle from "./OrderDone.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function OrderDone() {
    const navigate = useNavigate();
    useEffect(()=> {
        setTimeout(()=> {
            navigate('/profile/myorders')
        },3000)
    },[navigate])
    
  return (
    <div className="container">
      <div className={doneStyle.wrapper}>
        <div className={doneStyle.box}>
          <ion-icon name="checkmark-done-circle-outline"></ion-icon>
          <h4>تم الدفع بنجاح</h4>
          <p>سوف يتم التواصل معك قريباً</p>
        </div>
      </div>
    </div>
  );
}
