import React from "react";
import Image from "next/image";
import pnadol from "../../assets/img/pnadol.png";
import styles from "@/styles/offers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import ButtonOffers from "../../Components/Offers/ButtonOffers";

const CardOffersDesk = () => {
  return (
    <div
      className="w-100 d-flex -justify-content-start align-items-center flex-column mt-3"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        height: "160px",
      }}
    >
      <h3
        style={{
          fontSize: "17px !important",
          fontWeight: "bold",
          color: "#DD1717",
          lineHeight: "24px",
        }}
        className="mb-1"
      >
        10 % discount
      </h3>
      <div
        className="m-3 d-flex justify-content-center align-items-center position-relative"
        style={{
          borderRadius: "5px",
          height: "128px",
          width: "100%",
        }}
      >
        <Image
          //  className="w-20"
          src={pnadol}
          alt="Next.js Logo"
          width={65}
          height={80}
          priority
        />
        <div
          className={styles.ofer}
          style={{ width: "25%", left: "64%", borderRadius: 0 }}
        >
          <p style={{ fontSize: "11px !important" }}>-10 %</p>
        </div>
      </div>

      <div>
        {/* <div className="w-100 d-flex justify-content-between align-items-center">
          <h3
            style={{
              fontSize: "13px !important",
              fontWeight: "bold",
              color: "black",
              lineHeight: "16Ppx",
            }}
            className="mb-1"
          >
            Panadol Extra XX mg
          </h3>
        </div> */}

        <p
          className={styles.heddin}
          style={{ color: "grey", fontSize: "12px !important" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing e.......
        </p>
        <div className="d-flex justify-content-start align-items-center">
          <ButtonOffers
            txtColor="white"
            bckColor="#0F4392"
            BRColor="#0F4392"
            text="Get the offer"
          />
        </div>
      </div>
    </div>
  );
};

export default CardOffersDesk;
