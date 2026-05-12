import React from "react";
import styles from "@/styles/requests.module.css";

const ButtonRequests = ({ txtColor, bckColor, BRColor, text }) => {
  return (
    <div
      className={styles.btn}
      style={{
        backgroundColor: bckColor,
        marginBottom: "16px",
        borderRadius: "5px",
        border: `1px solid ${BRColor}`,
      }}
    >
      <h5 style={{ color: txtColor }}>{text}</h5>
    </div>
  );
};

export default ButtonRequests;
