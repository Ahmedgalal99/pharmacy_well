import Image from "next/image";
import React from "react";

function CardSlider({ title, sec_title, desc, slider }) {
  return (
    <div
      className=" mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#0F4392", borderRadius: 10, width: "100%" }}
    >
      <Image
        //  className="w-20"
        src={slider}
        alt="Next.js Logo"
        width={120}
        height={100}
        style={{ widows: "40%" }}
        className="slide-home-image"
        priority
      />
      <div
        className="d-flex m-2 justify-content-start align-items-start flex-column"
        style={{ backgroundColor: "#0F4392" }}
      >
        <h3 className="text-white" style={{ textAlign: "left" }}>
          How it works
        </h3>
        <p className="text-white mb-0" style={{ textAlign: "left" }}>
          {title}
        </p>
        <p className="text-white mb-0" style={{ textAlign: "left" }}>
          {sec_title}
        </p>
        <p className="text-white  mb-0 text-left" style={{ textAlign: "left" }}>
          {desc}
        </p>

        {}
      </div>
    </div>
  );
}

export default CardSlider;
