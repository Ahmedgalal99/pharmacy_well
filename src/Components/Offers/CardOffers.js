import React from "react";
import Image from "next/image";
import panadol from "../../assets/img/pnadol.png";
import styles from "@/styles/offers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import ButtonOffers from "./ButtonOffers";
import PostCart from "../../Apis/Cart/PostCart";
import { Col, Row } from "react-bootstrap";

const CardOffers = ({ item }) => {
  const SendCartFun = async (e) => {
    e.preventDefault();

    const formData = {
      product: 2,
      quantity: 5,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };
  return (
    <div className={`${styles.boxcardprdoduct} px-2`}>
      <div style={{ width: "100%", padding: "5px 8px" }} className="pb-0">
        <p className="text-center my-3 text-danger fw-bold fs-5 d-none d-md-block">
          10 % discount
        </p>
        <Row>
          <Col
            xs={6}
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              className={
                styles.boximg +
                " position-relative d-flex justify-content-center align-items-center w-100 mb-0 mb-md-3 p-2"
              }
              style={{
                borderRadius: "3px",
              }}
            >
              <div className={styles.discount + " fs-6"}>- 10 %</div>
              <Image
                src={panadol}
                className={`${styles.cardproductImage}`}
                alt="Next.js Logo"
                priority
              />
            </div>
          </Col>
          <Col xs={6} md={12}>
            <p className="text-start my-3 text-danger fw-bold fs-6 d-block d-md-none">
              10 % discount
            </p>
            <div className={styles.boxinfo}>
              <p className={styles.titlecard}>Panadol Extra XX mg</p>
              <p className={styles.txtcard}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempo....
              </p>
            </div>

            <button className="btn btn-primary w-100" onClick={SendCartFun}>
              Get the offer
            </button>

            {item?.description === true ? (
              <div className={styles.discount}>
                <p style={{ color: "#0F4392", fontSize: "10px" }}>-10 %</p>
              </div>
            ) : null}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CardOffers;
