import React from "react";
import styles from "@/styles/Tracking.module.css";

const ButtonTrack = ({ txtColor, bckColor, BRColor, text }) => {
  return (
    <div
      className="d-block d-sm-none d-flex"
      style={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
      }}
    >
      <div
        className={styles.button}
        style={{
          backgroundColor: bckColor,
          marginBottom: "16px",
          borderRadius: "5px",
          border: `1px solid ${BRColor}`,
        }}
      >
        <h5 className={styles.textBtnTrack} style={{ color: txtColor }}>
          {text}
        </h5>
      </div>
    </div>
  );
};

export default ButtonTrack;
