import React from "react";
import SummaryStyles from "./Summary.module.css";
import { useSelector } from "react-redux";

export default function Summary() {
  const { cartItems } = useSelector((state) => state.ProductSlice) || [];

const totalPrice = cartItems.reduce((total,product) => {
  return total + product.quantity * product.price
},0)

  return (
    <div className={`${SummaryStyles.summary_container}  p-2`}>
      <h4>طلبك</h4>
      <div>
        <table className="table table-striped">
          <thead>
            <tr className="table-info">
              <th className="col w-auto">المنتج</th>
              <th className="col w-25">المجموع الفرعي</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.name} × {item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="table-primary">
              <th>المجموع الكلي</th>
              <th>{totalPrice}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
