import React from "react";
import Image from "next/image";
import well from "../../assets/img/well.png";
import viber from "../../assets/img/viber.png";
import messenger from "../../assets/img/messenger.png";
import whatsapp from "../../assets/img/whatsapp.png";
import telegram from "../../assets/img/telegram.png";
import Link from "next/link";

const FooterDesk = () => {
  return (
    <div
      style={{ backgroundColor: "#DD1717" }}
      className="w-100 footer mt-0 d-flex justify-content-center align-items-center flex-column py-3 footer"
    >
      <div className="w-100  my-2 mb-3 d-flex justify-content-center align-items-center">
        <Image
          className="wellimage"
          src={well}
          width={250}
          height={70}
          alt="Next.js Logo"
        />
      </div>

      <div
        style={{ width: "80%" }}
        className="d-flex my-2 mt-3 justify-content-center align-items-center gap-5 footer-links"
      >
        <Link href="/" className="text-footer mb-0">
          About us
        </Link>
        <Link href="/products/all" className="text-footer mb-0">
          Our products
        </Link>
        <Link href="/" className="text-footer mb-0">
          How to order
        </Link>
        <Link href="/policy" className="text-footer mb-0">
          Our policy
        </Link>
      </div>
      <div
        className="d-flex my-2 justify-content-center align-items-center"
        style={{ height: "2px", backgroundColor: "grey", width: "85%" }}
      ></div>
      <div className="w-100 my-2 d-flex justify-content-center align-items-center ">
        <h5
          className="fs-5 fw-normal text-footer text-white"
          style={{ fontSize: "20px" }}
        >
          Contact us
        </h5>
      </div>
      <div className="w-100 text-center d-flex justify-content-center align-items-center ">
        <Image
          //  className="w-20"
          src={telegram}
          style={{ margin: "10px", width: "50px", height: "50px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
        <Image
          //  className="w-20"
          src={whatsapp}
          style={{ margin: "10px", width: "50px", height: "50px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
        <Image
          //  className="w-20"
          src={messenger}
          style={{ margin: "10px", width: "50px", height: "50px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
        <Image
          //  className="w-20"
          src={viber}
          style={{ margin: "10px", width: "50px", height: "50px" }}
          alt="Next.js Logo"
          width="52px"
          height="52px"
          priority
        />
      </div>
    </div>
  );
};

export default FooterDesk;
