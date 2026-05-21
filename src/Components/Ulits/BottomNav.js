import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter hook from next/router
import Image from "next/image";
import homeIcon from "../../assets/img/home_major.png";
import productsIcon from "../../assets/img/Default3.png";
import requestsIcon from "../../assets/img/Frame 72.png";
import contactIcon from "../../assets/img/Default53.png";
import Link from "next/link";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const router = useRouter(); // Initialize useRouter hook

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIconClick = (route) => {
    router.push(route); // Navigate to the specified route using next/router
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "80px",
        bottom: 0,
        left: 0,
        zIndex: "11111111",
        backgroundColor: "rgba(250, 255, 240, 0.96)",
        boxShadow: "0px -18px 40px rgba(77, 124, 15, 0.12)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      className="navBotom"
    >
      <Link
        href="/"
        className={`${router.pathname === "/" ? "active" : ""} nav-item`}
      >
        <div
          className="box d-flex flex-column justify-content-center align-items-center"
          style={{ fontSize: "14px" }}
        >
          <Image src={homeIcon} width={20} height={20} alt="" />
          <div>
            <span>Home</span>
          </div>
        </div>
      </Link>
      <Link
        href="/products/all"
        className={`${
          router.pathname === "/products/all" ? "active" : ""
        } nav-item`}
      >
        <div
          className="box d-flex flex-column justify-content-center align-items-center"
          style={{ fontSize: "14px" }}
        >
          <Image src={productsIcon} width={20} height={20} alt="" />
          <div>
            <span>Products</span>
          </div>
        </div>
      </Link>
      <Link
        href="/requests"
        className={`${
          router.pathname === "/requests" ? "active" : ""
        } nav-item`}
      >
        <div
          className="box d-flex flex-column justify-content-center align-items-center"
          style={{ fontSize: "14px" }}
        >
          <Image src={requestsIcon} width={20} height={20} alt="" />
          <div>
            <span>My orders</span>
          </div>
        </div>
      </Link>
      <Link
        href="/contactus"
        className={`${
          router.pathname === "/contactus" ? "active" : ""
        } nav-item`}
      >
        <div
          className="box d-flex flex-column justify-content-center align-items-center"
          style={{ fontSize: "14px" }}
        >
          <Image src={contactIcon} width={20} height={20} alt="" />
          <div>
            <span>Contact us</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default BottomNav;
