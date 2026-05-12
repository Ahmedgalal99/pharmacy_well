import React from "react";
import styles from "@/styles/offers.module.css";
import phone from "../../assets/img/phone.png";

import Image from "next/image";
const ButtonOfferDEsk = ({ txtColor, bckColor, BRColor, text }) => {
  return (
    <div
      className={styles.btnoffer}
      style={{
        backgroundColor: bckColor,
        borderRadius: "5px",
        border: `1px solid ${BRColor}`,
        width: "80px",
      }}
    >
      <div
        className={styles.txtbtn}
        style={{
          color: txtColor,
          marginTop: 0,
          lineHeight: "16px",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ButtonOfferDEsk;
