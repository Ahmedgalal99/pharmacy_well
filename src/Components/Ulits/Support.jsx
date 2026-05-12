import React from "react";
import Image from "next/image";
import support from "../../assets/img/contact_support.png";
import Link from "next/link";

const Support = () => {
  return (
    <Link
      href="/contactus"
      style={{
        position: "fixed",
        right: "0",
        top: "85%",
        cursor: "pointer",
        zIndex: "2222",
      }}
      className="support-btn"
    >
      <Image src={support} alt="" />
    </Link>
  );
};

export default Support;
