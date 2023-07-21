import React from "react";
import Header from "../Components/header/Hero";
import Services from "../Components/service/Services";
import About from "../Components/About/About";
import Sales from "../Components/Sales/Sales";
import Achievements from "../Components/Achievements/Achievements";
import Testimonial from "../Components/Testimonial/Testimonial";


export default function Main({userData}) {
  return (
    <>
      <Header userData={userData} />
      <Services />
       <About/> 
      {/* <Sales />     */}
      <Achievements/>
      <Testimonial/>

    </>
  );
}
