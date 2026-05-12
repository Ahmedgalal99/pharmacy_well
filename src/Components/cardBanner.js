import Image from "next/image";
import React from "react";
import banner from "../assets/img/banner.png";

function CardBanner() {
  return (
    <div className="d-flex justify-content-around align-items-center w-100 rounded-3">
      <div className="d-flex justify-content-start align-items-start flex-column">
        <h5 className="text-primary h5 fw-bold">Lorem ipsum dolor sit, !</h5>
        <p className="text-dark" style={{ fontSize: "14px" }}>
          Lorem ipsum dolor sit amet.
        </p>
        <button type="submit" className="btn btn-primary mb-3 mt-3 w-100 py-2">
          Get The Offer
        </button>
      </div>
      <Image
        className="w-30"
        src={banner}
        alt="Next.js Logo"
        width={150}
        height={100}
        priority
      />
    </div>
  );
}

export default CardBanner;
