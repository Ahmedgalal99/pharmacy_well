import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import telfast from "../../assets/img/telfast.webp";
import Quantity from "../Ulits/Quantity";
import PostCart, { DeleteCart } from "@/Apis/Cart/PostCart";

const CardOrderDesk = ({item}) => {
  const [imag, setimag] = useState(item?.product?.home_image);
  const [count, setcount] = useState(item?.quantity);
  const [quantity, setquantity] = useState(count);
  const [id, setid] = useState(item?.product?.id);

  const SendCartFundes = async (e) => {
    // e.preventDefault();

    const formData = {
      product: id,
      quantity: -1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };

  const SendCartFunplus = async (e) => {
    // e.preventDefault();

    const formData = {
      product: id,
      quantity: 1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };

  const increase = () => {
    setid(item?.product?.id);

    setcount(count + 1);
    console.log(id);
    console.log(item);
    if (item) SendCartFunplus();
  };
  const desincrease = () => {
    setid(item?.product?.id);

    setcount(count - 1);
    if (item) SendCartFundes();
  };
  const DeleteItem=()=>{
    console.log(item,"itemm")
    DeleteCart({id:item?.id})
  }
  return (
    <div
      className="w-100 d-block justify-content-start align-items-center mt-3 pe-3"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        height: "164px",
        position: "relative",
        display:"block",
        

      }}
    >
      <FontAwesomeIcon
        icon={faCircleXmark}
        style={{
          fontSize: 15,
          color: "red",
          marginRight: "20px",
          top: "13px",
          right: "-5px",
          position: "absolute",
          cursor:"pointer"
        }}
        onClick={DeleteItem}
      />

      <Row className="align-items-center">
        <Col md={4}>
          <div
            className="m-3"
            style={{
              borderRadius: "5px",
              display: "flex",
              // width: "145px",
              height: "80%",
              justifyContent: "center",
              border: "1px solid #C9CCCF",
            }}
          >
            {item?.product?.home_image ? (
              <Image
                src={item?.product?.home_image}
                alt="Next.js Logo"
                width={100}
                height={116}
                style={{ width: "100%", height: "100%" }}
                priority
                className=""
              />
            ) : (
              <Image
                src={require("../../assets/img/noimage.jpeg")}
                alt="Next.js Logo"
                width={100}
                height={116}
                style={{ width: "100%", height: "100%" }}
                priority
                className=""
              />
            )}
           
          </div>
        </Col>
        <Col md={8}>
          <div>
            <div className="w-100 d-flex justify-content-between align-items-center">
              <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>
                {item?.product?.name}
              </h5>
            </div>

            <p style={{ color: "grey", fontSize: "12px" }}>
            {item?.product?.description}

            </p>
            <Quantity item={item} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardOrderDesk;
