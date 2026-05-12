import React from "react";
import Image from "next/image";
import starSmGold from "../assets/img/star_sm_gold.png";
import starSmGray from "../assets/img/star_sm_gray.png";

function Testimonial({ item }) {
  return (
    <div
      className="mt-2 p-3 d-flex justify-content-start align-items-start"
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        width: "366px",
        height: "135px",
      }}
    >
      <Image
        src={item?.file}
        alt="Next.js Logo"
        width={30}
        height={30}
        style={{ marginTop: "7px", width: "80px", height: "80px" }}
        priority
      />
      <div
        className="ms-4 mt-0 d-flex justify-content-start align-items-start flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="text-primary mb-1">User Name</h3>
        <div className="d-flex mb-2 justify-content-start align-items-start gap-2 mt-3">
          {Array(item?.rate)
            ?.fill(0)
            ?.map((item, i) => (
              <Image
                key={i}
                src={starSmGold}
                alt="star"
                style={{ width: "25px", height: "25px" }}
              />
            ))}
          {Array(5 - item?.rate)
            ?.fill(0)
            ?.map((item, i) => (
              <Image
                key={i}
                src={starSmGray}
                alt="star"
                style={{ width: "25px", height: "25px" }}
              />
            ))}
        </div>
        <p className="text-dark"> {item?.description}</p>
      </div>
    </div>
  );
}

export default Testimonial;
