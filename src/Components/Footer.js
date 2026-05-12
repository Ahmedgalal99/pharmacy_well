import React from "react";
import Image from "next/image";
import well from "../assets/img/well.png";
import viber from "../assets/img/viber.png";
import messenger from "../assets/img/messenger.png";
import whatsapp from "../assets/img/whatsapp.png";
import telegram from "../assets/img/telegram.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#DD1717" }}
      className="w-100  footer  d-flex justify-content-center align-items-center flex-column"
    >
      <div className="w-100  my-2  d-flex justify-content-center align-items-center ">
        <Image
          className=" wellimage"
          src={well}
          width={250}
          height={70}
          alt="Next.js Logo"
        />
      </div>

      <div className="w-100 d-flex my-2  justify-content-around align-items-center">
        <p className="text-footer">About us</p>
        <p className="text-footer">
          <Link href={"/products/all"}>Our products</Link>
        </p>
        <p className="text-footer">How to order</p>
        <p className="text-footer">Our policy</p>
      </div>
      <div
        className="    d-flex my-2 justify-content-center align-items-center "
        style={{ height: "2px", backgroundColor: "grey", width: "85%" }}
      ></div>
      <div className="w-100   my-2 d-flex justify-content-center align-items-center ">
        <p
          className="text-footer"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          contact us
        </p>
      </div>
      <div className="w-100 text-center d-flex justify-content-center align-items-center ">
        <Image
          //  className="w-20"
          src={telegram}
          style={{ margin: "10px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
        <Image
          //  className="w-20"
          src={whatsapp}
          style={{ margin: "10px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
        <Image
          //  className="w-20"
          src={messenger}
          style={{ margin: "10px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
        <Image
          //  className="w-20"
          src={viber}
          style={{ margin: "10px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
