import React from "react";
import Image from "next/image";

const Steps = ({ imgsource, title, text, desc, className }) => {
  return (
    <div
      className={`d-flex boxsteps justify-content-center align-items-center flex-column mx-2 ${className}`}
      style={{ minHeight: "383px" }}
    >
      <p
        style={{
          fontSize: "16px !important",
          marginBottom: 0,
          color: "var(--theme-lime-dark)",
        }}
      >
        {title}
      </p>
      <p style={{ color: "var(--theme-lime-dark)", fontSize: "18px !important" }}> {text}</p>
      <Image
        //  className="w-20"
        src={imgsource}
        // style={{ width: "75%", height: "50%" }}
        alt="Next.js Logo"
        style={{ minHeight: "238px" }}
        // width={300}
        priority
      />
      <p
        className="text-center mt-3"
        style={{
          color: "var(--theme-muted)",
          fontSize: "16px !important",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default Steps;
