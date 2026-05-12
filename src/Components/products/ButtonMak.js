import React from "react";
import styles from "@/styles/products.module.css";

const ButtonMak = ({ txtColor, bckColor, BRColor, text }) => {
  return (
    <div
      className={styles.ButtonMak}
      style={{
        backgroundColor: bckColor,
        marginBottom: "16px",
        borderRadius: "5px",
        border: `1px solid ${BRColor}`,
      }}
    >
      <p style={{ color: txtColor }}>{text}</p>
    </div>
  );
};

export default ButtonMak;
