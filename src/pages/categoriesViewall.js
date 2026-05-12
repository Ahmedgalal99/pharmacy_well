import React from "react";
import styles from "@/styles/contact.module.css";
import Header from "../Components/Ulits/Header";
import CategorySliderCard from "../Components/CategorySliderCard";

import { useState, useEffect } from "react";
import ButtonContact from "../Components/products/ButtonContact";
import getallCategories from "../Apis/Category";
import Link from "next/link";
import NavBarMobail from "../Components/desk/NavBarMobail";
import { Col, Row } from "react-bootstrap";

const CategoriesViewall = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [400, 600]; // Define the height values that the modal can snap to
  const [categories, setcateogies] = useState([]);
  const getHomeData = async () => {
    const res = await getallCategories();
    console.log(res, "ressss");
    setcateogies(res?.results);
    return res;
  };
  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <>
      <NavBarMobail titlePage="Categories" />
      <main className={styles.main} style={{ backgroundColor: "#EDEDED" }}>
        <div className={`${styles.boxwhite}`}>
          <p className={styles.txtExplore}>Explore our products or </p>
          <Link href={"/contactus"}>
            <ButtonContact
              txtColor="#0F4392"
              bckColor="white"
              BRColor="#0F4392"
              text="Contact a pharmacist"
            />
          </Link>
        </div>

        <div
          className="mt-3 d-flex justify-content-between align-items-center flex-wrap  "
          style={{ width: "95%" }}
        >
          <Row>
            {categories?.length > 0 &&
              categories.map((item) => {
                return (
                  <Col xs={4} md={3} lg={2}>
                    <CategorySliderCard item={item} />;
                  </Col>
                );
              })}
          </Row>
        </div>
      </main>
    </>
  );
};

export default CategoriesViewall;
