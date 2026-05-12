import Image from "next/image";
import React, { useState } from "react";
import starSmGold from "../../assets/img/star_sm_gold.png";
import starSmGray from "../../assets/img/star_sm_gray.png";

function Testimonialdesk({ item, atHome = false }) {
  const [rate, setrate] = useState();
  const [img, setimg] = useState(item?.file.toString());
  return (
    <div
      className="p-3 d-flex justify-content-start align-items-start m-2 rounded-3"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
        width: atHome ? "366px" : "unset",
        height: "135px",
      }}
    >
      <Image
        src={item?.file}
        alt="Next.js Logo"
        width={30}
        height={30}
        style={{ marginTop: "7px", width: "90px", height: "100px" }}
        priority
      />
      <div
        className="ms-4 mt-0 d-flex justify-content-start align-items-start flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h3
          className="text-primary mb-1"
          style={{ fontSize: "14px !important" }}
        >
          User Name
        </h3>
        <div className="d-flex mb-2 justify-content-start align-items-start gap-2 mt-3">
          {Array(item?.rate)
            ?.fill(0)
            ?.map((item, i) => (
              <Image key={i} src={starSmGold} alt="star" />
            ))}
          {Array(5 - item?.rate)
            ?.fill(0)
            ?.map((item, i) => (
              <Image key={i} src={starSmGray} alt="star" />
            ))}
        </div>

        <p className="text-dark" style={{ fontSize: "10px !important" }}>
          {item?.description.length >= 25
            ? `${item.description.slice(0, 25)} ...`
            : item.description}
        </p>
      </div>
    </div>
  );
}

export default Testimonialdesk;
