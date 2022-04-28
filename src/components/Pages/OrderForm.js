import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OrderForm = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#0c0c0cf8] relative">
        <br />
        <br />
        <div className="orderForm__container flex max-w-7xl justify-evenly">
          {/* Left Side */}
          <div className="text-white"></div>

          <iframe
            title="googleForm"
            className="googleForm w-[60%] h-[1800px] custom:w-full h-[2000px] sm:w-3/4 lg:h-[1800px]"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdaWlvVxtwzmWxwoSGaaJOWDcHGUEWX1S22MdfnnothwvCnTA/viewform?embedded=true"
            scrolling="no"
          >
            Loading...
          </iframe>

          {/* Right Side */}
          <div className="text-white"></div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default OrderForm;
