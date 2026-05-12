import React from "react";
import styles from "@/styles/products.module.css";
import { useRouter } from "next/router";

const ButtonContact = ({ txtColor, bckColor, BRColor, text }) => {
  const router = useRouter();

  return (
    <div
      className={styles.button}
      style={{
        backgroundColor: bckColor,
        marginBottom: "16px",
        borderRadius: "5px",
        border: `1px solid ${BRColor}`,
        padding: 10,
      }}
      onClick={() => {
        router.push("/contactus");
      }}
    >
      <p style={{ color: txtColor }}>{text}</p>
    </div>
  );
};

export default ButtonContact;
