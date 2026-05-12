import React, { useEffect, useState } from "react";
import styles from "@/styles/products.module.css";
import panadolImg from "../../assets/img/product123.jpg";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PostCart from "@/Apis/Cart/PostCart";
import { setProductDetails } from "../../Slices/productSlice";

const CardBestProduct = ({ item }) => {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const SendCartFun = async (e) => {
    const formData = {
      product: item?.id,
      quantity: 1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };
  useEffect(() => {
    if (isLoading) {
      SendCartFun().then(() => {
        setLoading(false);
      });
    }

    if (localStorage.getItem("user")) {
      setUser(true);
    }
  }, [isLoading]);

  const handleClick = () => {
    if (user) {
      setLoading(true);
    } else {
      router.push("/login");
    }
  };
  const onCardClick = () => {
    router.push(`/products/${item?.category}/details/${item?.id}`);
    dispatch(setProductDetails(item));
  };
  return (
    <div className={`${styles.boxcardprdoduct} px-0 px-md-2 py-0 pb-2 py-md-3`}>
      <div
        style={{ width: "100%", padding: "5px 8px" }}
        className={styles.boxImg1}
        onClick={onCardClick}
      >
        <div
          className="d-flex justify-content-center align-items-center w-100 mb-3"
          style={{
            boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.1)",
            borderRadius: "3px",
          }}
        >
          {item?.home_image ? (
            <Image
              loader={() => item?.home_image}
              src={item?.home_image}
              className={styles.cardproductImage}
              alt="Next.js Logo"
              width={100}
              height={150}
              style={{ width: "100%", height: "100%", margin: 0 }}
              priority
            />
          ) : (
            <Image
              src={require("../../assets/img/noimage.jpeg")}
              className={styles.cardproductImage}
              alt="Next.js Logo"
              width={100}
              height={150}
              style={{ width: "100%", height: "150px", margin: 0 }}
              priority
            />
          )}
        </div>

        <div className={styles.boxinfo}>
          <p
            className={styles.titlecard}
            style={{
              height: "50px",
            }}
          >
            {item?.name}
          </p>
          <p
            className={styles.txtcard}
            style={{
              height: "35px",
            }}
          >
            {item?.description?.slice(0, 50)} ...
          </p>
        </div>
      </div>
      <Button
        variant="primary"
        className="w-95"
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Make A Request"}
      </Button>
      {item?.description === true ? (
        <div className={styles.discount}>
          <p style={{ color: "#0F4392", fontSize: "10px" }}>-10 %</p>
        </div>
      ) : null}
      {/* {item?.description === true ? (
        <div className={styles.discount}>
          <p style={{ color: "#0F4392", fontSize: "10px" }}>-10 %</p>
        </div>
      ) : null} */}
    </div>
  );
};

export default CardBestProduct;
