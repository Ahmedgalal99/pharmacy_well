import React from "react";
import styles from "@/styles/products.module.css";

const Labeldesk = ({ text, backcolor }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center mx-2"
      style={{
        backgroundColor: "rgba(221, 23, 23, 0.2)",
        borderRadius: "4px",
      }}
    >
      <p
        className={styles.label}
        style={{
          color: "black",
          padding: "5px",
          backgroundColor: { backcolor },
        }}
      >
        {text}{" "}
      </p>
    </div>
  );
};

export default Labeldesk;
