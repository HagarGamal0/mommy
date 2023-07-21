import React from "react";
import AddBaby from "./Addbaby/AddBaby";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBaby } from "../../Redux/Slices/MohterSlice";
import BabyCard from "./BabyCard/BabyCard";

export default function Babies() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id")
  const { baby } = useSelector((state) => state.MotherSlice) || [];
  console.log(baby)
  

  useEffect(() => {
    dispatch(getBaby(userId));
  }, [dispatch, userId]);

  return (
    <div className="col-lg-9">
      <div className=" my-1">
        <AddBaby />
        <BabyCard />
      </div>
    </div>
  );
}
