import Image from "next/image";
import React from "react";

function OurServicesCard({ image, desc, title }) {
  return (
    <div className="w-100 py-3 px-3 d-flex justify-content-center align-items-start">
      <Image
        style={{
          width: "116px",
          height: "116px",
        }}
        className="Service rounded-2"
        src={image}
        alt="Next.js Logo"
      />
      <div className="text-start ms-3">
        <h5 className="text-primary fs-5">{title}</h5>
        <p className="fs-5">{desc}</p>
      </div>
    </div>
  );
}

export default OurServicesCard;
