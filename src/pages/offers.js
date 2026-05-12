import React, { useEffect, useState } from "react";
import styles from "@/styles/products.module.css";
import CardOffers from "../Components/Offers/CardOffers";
import NavBar from "../Components/desk/NavBar";
import NavBarMobail from "../Components/desk/NavBarMobail";
import SearchInput from "../Components/products/SearchInput";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import iconfilter from "../assets/img/iconfilter.png";
import SerachBar from "../Components/SerachBar";
import Filter from "../Components/desk/Filter";
import Link from "next/link";
import ButtonContact from "../Components/products/ButtonContact";
import Sheet from "react-modal-sheet";
import DropdownFilter from "../Components/products/DropdownFilter";
import BottomNav from "../Components/Ulits/BottomNav";
import FooterDesk from "../Components/desk/FooterDesk";

const offers = () => {
  const [isOpen, setOpen] = useState(false);
  const [inLogin, setInLogin] = useState(false);
  const snapPoints = [600, 400]; // Define the height values that the modal can snap to

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setInLogin(true);
    }
  });
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "#0F4392",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <NavBarMobail titlePage="Big deals" />
        <div className="w-100 pt-1 pb-3 d-flex justify-content-center d-block d-sm-none align-items-center flex-column">
          <div
            style={{ width: "95%" }}
            className="d-flex justify-content-between mx-3 align-items-center flex-row-reverse mt-2"
          >
            <button
              onClick={() => setOpen(true)}
              disabled={!inLogin}
              className={styles.boxfilter}
            >
              <Image
                src={iconfilter}
                className={styles.iconfilter}
                alt="Next.js Logo"
                width={14}
                height={16}
                priority
              />

              <p className={styles.txtfilter}>Filter</p>
            </button>
            <SearchInput />
          </div>
        </div>
      </div>
      <Container className="padding-bottom-sm">
        <Breadcrumb
          style={{ fontSize: "18px" }}
          className="d-none d-lg-block mt-3"
        >
          <Breadcrumb.Item linkAs={Link} href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Check offers</Breadcrumb.Item>
        </Breadcrumb>

        <h1
          className="text-center h3 my-4 d-none d-lg-block fw-bold"
          style={{ color: "#0F4392" }}
        >
          Big deals
        </h1>

        <SerachBar showBigScreen={true} />
        <main className={styles.main}>
          <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
            <div
              className="d-flex justify-content-start align-items-center mt-3 gap-2"
              style={{ width: "100%" }}
            >
              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "#DD1717",
                }}
              >
                <p className={styles.label}>All</p>
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "rgba(221, 23, 23, 0.2)",
                }}
              >
                <p className={styles.label}>Top 50 medicines</p>
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "rgba(221, 23, 23, 0.2)",
                }}
              >
                <p className={styles.label}>Natural oils and herbs </p>
              </div>

              <div
                className="d-flex justify-content-center align-items-center rounded-1 py-1 px-2"
                style={{
                  backgroundColor: "rgba(221, 23, 23, 0.2)",
                }}
              >
                <p className={styles.label}>Cosmtics </p>
              </div>
            </div>
          </div>

          <Row className="mt-2 mt-lg-5">
            <Col md={3} sm={12} className="d-none d-sm-block">
              <div
                style={{
                  borderRadius: "8px",
                  boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
                }}
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <h5 className="my-3">Filter by</h5>

                <Filter label="By diseases" />
                <Filter label="By users" />
                <Filter label="By ingredients" />
                <div
                  style={{ width: "80%" }}
                  className="d-flex justify-content-around my-3 w-100 align-items-end flex-row-reverse "
                >
                  <button className="btn btn-primary">Apply</button>
                  <button
                    className="btn btn-outline-primary"
                    style={{ color: "#0F4392" }}
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </Col>
            <Col md={9} sm={12} className="d-flex flex-column">
              <div className={`${styles.boxwhite} order-1`}>
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
              <Row
                className="order-3"
                style={{
                  bsGutterX: "1.5rem",
                }}
              >
                <Col md={4} className="mb-2">
                  <CardOffers />
                </Col>
                <Col md={4} className="mb-2">
                  <CardOffers />
                </Col>
                <Col md={4} className="mb-2">
                  <CardOffers />
                </Col>
                <Col md={4} className="mb-2">
                  <CardOffers />
                </Col>
                <Col md={4} className="mb-2">
                  <CardOffers />
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="w-80 d-flex  justify-content-start align-items-center  ">
            <Sheet
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              snapPoints={snapPoints}
              className="w-100 d-flex  justify-content-center align-items-center  "
            >
              <Sheet.Container className={styles.bottomsheet}>
                <Sheet.Header />
                <div className="w-100 d-flex  justify-content-center align-items-center mb-3 ">
                  <h4 style={{ color: "#0F4392" }}>Filter by</h4>
                </div>

                <Sheet.Content
                  className=" d-flex"
                  style={{ width: "90%", flexDirection: "column" }}
                >
                  <DropdownFilter
                    title={"By Disease"}
                    options={[
                      { name: "Option ", id: 1 },
                      { name: "Option ", id: 2 },
                    ]}
                  />
                  <DropdownFilter
                    title={"By Users"}
                    options={[
                      { name: "All ", id: 1 },
                      { name: "Option", id: 2 },
                    ]}
                  />
                  <DropdownFilter
                    title={"By ingredients"}
                    options={[
                      { name: "All ", id: 1 },
                      { name: "Option", id: 2 },
                    ]}
                  />
                  <div className="d-flex justify-content-between mt-5">
                    <div
                      className="btn btn-primary pb-2 pt-2 pr-5 pl-5"
                      style={{ paddingInline: "25px", width: "45%" }}
                    >
                      apply
                    </div>
                    <div
                      className="btn btn-outline-primary pb-2 pt-2 pr-5 pl-5"
                      style={{ paddingInline: "25px", width: "45%" }}
                    >
                      Clear all
                    </div>
                  </div>
                </Sheet.Content>
              </Sheet.Container>

              <Sheet.Backdrop />
            </Sheet>
          </div>
        </main>
      </Container>

      <div className="d-none d-sm-block ">
        <FooterDesk />
      </div>
    </div>
  );
};

export default offers;
