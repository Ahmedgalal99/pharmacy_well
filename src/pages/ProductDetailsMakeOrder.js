import React from "react";
import styles from "@/styles/contact.module.css";
import Header from "../Components/Ulits/Header";

import Sheet from "react-modal-sheet";
import { useState } from "react";
import ModalContent from "../Components/Ulits/ModalContent";
import Slideshow from "../Components/Slideshow";
import ButtonProductDetails from "../Components/Ulits/ButtonProductDetails";
import ButtonRequests from "../Components/Requests/ButtonRequests";

const ProductDetailsMakeOrder = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to
  const circleStyle = {
    backgroundColor: "#0F4392",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
  };
  const makerequest = () => {};
  return (
    <main className={styles.main} style={{ backgroundColor: "#EDEDED" }}>
      <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
        <Header title="Product details" />
      </div>
      <div
        className="  d-flex justify-content-center align-items-center flex-column bg-white "
        style={{
          bottom: 0,
          height: "166px",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        <div
          style={{ width: "95%", marginBottom: "20px" }}
          className="  d-flex justify-content-start align-items-center  "
        >
          <div style={circleStyle}>
            <span>4</span>
          </div>
          <p
            style={{
              color: "#0F4392",
              fontFamily: "400",
              fontSize: "16px",
              lineHeight: "24px",
              marginLeft: "10px",
            }}
          >
            Products have been selected
          </p>
        </div>

        <div
          style={{ width: "95%" }}
          className=" d-flex justify-content-start align-items-center "
        >
          <ButtonRequests
            txtColor="white"
            bckColor="#0F4392"
            BRColor="#0F4392"
            text="Place Order"
          />
        </div>
        <div
          style={{ width: "95%" }}
          className="  d-flex justify-content-start align-items-center "
        >
          <p style={{ textAlign: "center", color: "#DD1717" }}>
            Note that: your order will not be confirmed before you receive a
            call from us to let you know your order price to confirm.
          </p>
        </div>
      </div>
      <div
        style={{ width: "100%" }}
        className=" d-flex justify-content-center align-items-center "
      >
        <Slideshow />
      </div>
      <div
        style={{ width: "95%" }}
        className="d-flex justify-content-between align-items-center mx-2"
      >
        <div style={{ width: "50%", marginRight: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: "bold",
              color: "black",
              marginBottom: 0,
            }}
          >
            Product Category
          </h3>
          <h2
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            pandol extra xx mg
          </h2>
          <p style={{ fontSize: "12px", lineHeight: "16px", color: "#828282" }}>
            {" "}
          </p>
        </div>

        <div style={{ width: "50%" }}>
          <ButtonProductDetails
            txtColor="white"
            bckColor="#0F4392"
            BRColor="#0F4392"
            text="Make a  request"
          />
        </div>
      </div>

      <div
        style={{
          background: "grey",
          width: "95%",
          height: "1px",
          marginTop: "15px",
          marginBottom: "30px",
        }}
      ></div>
      <div
        style={{ width: "95%" }}
        className="d-flex justify-content-start align-items-center  mx-2"
      >
        {" "}
        <h3 style={{ color: "#0F4392" }}>Product details</h3>
      </div>
      <div
        style={{ width: "95%" }}
        className="d-flex justify-content-start align-items-center flex-column  mx-2"
      >
        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            Brand:
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>Lorem Ipsum</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            Active ingredients :
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>Lorem Ipsum</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2  "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            User:
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>Lorem Ipsum</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: "18px",
              opacity: "77%",
            }}
          >
            Russian similar:
          </p>
          <p style={{ color: "grey", fontSize: "18px" }}>Lorem Ipsum</p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start align-items-start mt-2 "
        >
          <p>
            {" "}
            <span
              style={{
                marginBottom: 0,
                fontWeight: "bold",
                fontSize: "18px",
                opacity: "77%",
              }}
            >
              Description:
            </span>{" "}
            <span style={{ color: "grey", fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsMakeOrder;
