import React from "react";
import styles from "@/styles/ulits.module.css";

const ButtonRequestOrder = ({ txtColor, bckColor, BRColor, text }) => {
  return (
    <button
      className="bubbly-button mt-4 py-2"
      style={{
        backgroundColor: bckColor,
        marginBottom: "0",
        borderRadius: "5px",
        border: `1px solid ${BRColor}`,
      }}
    >
      <h5 className={styles.textBtnTrack} style={{ color: txtColor }}>
        {text}
      </h5>
    </button>
  );
};

export default ButtonRequestOrder;
