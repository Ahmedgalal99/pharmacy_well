import React from "react";
import styles from "@/styles/contact.module.css";
import Frame from "../assets/img/Frame.png";
import viber from "../assets/img/viber.png";
import messenger from "../assets/img/messenger.png";
import whatsapp from "../assets/img/whatsapp.png";
import telegram from "../assets/img/telegram.png";
import location from "../assets/img/location.png";
import phone from "../assets/img/phone.png";
import Image from "next/image";
import ButtonRequestOrder from "../Components/Ulits/ButtonRequestOrder";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import ModalContent from "../Components/Ulits/ModalContent";
import NavBar from "../Components/desk/NavBar";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import NavBarMobail from "../Components/desk/NavBarMobail";
import FooterDesk from "../Components/desk/FooterDesk";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";
import { useEffect } from "react";
import Link from "next/link";
import SizesExample from "../Components/Spinner";
import BottomNav from "../Components/Ulits/BottomNav";

const contactus = () => {
  const [isOpen, setOpen] = useState(false);
  const snapPoints = [600, 400]; // Define the height values that the modal can snap to
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  useEffect(() => {
    setisLoadingPage(false);
  }, []);
  return (
    <>
      <NavBar />
      <NavBarMobail titlePage="Contact Us" />
      <main
        style={{
          backgroundColor: "#eaeaea",
        }}
        className="d-flex align-items-center flex-column pb-4"
      >
        {isLoadingPage ? (
          <SizesExample />
        ) : (
          <>
            <div className="d-none d-sm-block w-100">
              <Container className="mb-4">
                <Breadcrumb
                  style={{ fontSize: "18px" }}
                  className="d-none d-lg-block mt-3"
                >
                  <Breadcrumb.Item linkAs={Link} href="/">
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item linkAs={Link} href="/products/all">
                    Our products
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                  <Col className="col-12">
                    <h2 className="text-center text-primary mt-5">
                      Contact Us
                    </h2>
                    <h5
                      className="mt-3 text-center"
                      style={{ color: "#DD1717" }}
                    >
                      We are here for you
                    </h5>
                  </Col>
                  <Col className="col-12">
                    <div className="mt-5 mb-4 w-100 text-center d-flex justify-content-center align-items-center flex-column">
                      <Image
                        src={Frame}
                        alt="Next.js Logo"
                        priority
                        style={{ width: "463px", height: "172px" }}
                      />
                    </div>
                  </Col>
                  <Col className="col-12">
                    <Row className="d-flex justify-content-around">
                      <Col
                        className="col-5 p-4 text-center"
                        style={{ background: "white", borderRadius: "15px" }}
                      >
                        <h5>Social media contacts</h5>
                        <p className="px-3 mt-4">
                          If you need a help from our pharmacists or want to
                          order a specific prescription contact us via
                        </p>
                        <div className="w-100 text-center d-flex justify-content-center align-items-center">
                          <Image
                            src={telegram}
                            style={{ margin: "10px" }}
                            alt="Next.js Logo"
                            width="32"
                            height="32"
                            priority
                          />
                          <Image
                            src={whatsapp}
                            style={{ margin: "10px" }}
                            alt="Next.js Logo"
                            width="32"
                            height="32"
                            priority
                          />
                          <Image
                            src={messenger}
                            style={{ margin: "10px" }}
                            alt="Next.js Logo"
                            width="32"
                            height="32"
                            priority
                          />
                          <Image
                            src={viber}
                            style={{ margin: "10px" }}
                            alt="Next.js Logo"
                            width="32"
                            height="32"
                            priority
                          />
                        </div>
                      </Col>
                      <Col
                        className="col-5 text-center p-4"
                        style={{ background: "white", borderRadius: "15px" }}
                      >
                        <h5>Reach us via</h5>
                        <div className="w-90 d-flex text-center justify-content-around align-items-center flex-column">
                          <div className="w-95 d-flex text-center justify-content-center align-items-center mx-5">
                            <Row className="d-flex text-center justify-content-center align-items-center">
                              <Col
                                className="col-12 col-sm-12 col-md-12"
                                style={{ backgroundColor: "white" }}
                              >
                                <Row>
                                  <Col className="col-12 d-flex text-center justify-content-between align-items-center">
                                    <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                                      <Image
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                        }}
                                        src={phone}
                                        alt="Next.js Logo"
                                      />
                                      <p>(+20)1050777117</p>
                                    </div>
                                    <Link
                                      className="btn btn-outline-primary d-flex justify-content-center align-items-center gap-2 fw-bold"
                                      style={{
                                        width: "170px",
                                        height: "40px",
                                        color: "#0F4392",
                                        border: "1px solid #0F4392",
                                      }}
                                      href={"tel:+201050777117"}
                                    >
                                      <Image
                                        style={{
                                          width: "14px",
                                          height: "14px",
                                        }}
                                        src={phone}
                                        alt="Next.js Logo"
                                      />
                                      Call Now
                                    </Link>
                                  </Col>
                                  <Col className="col-12">
                                    <div className="d-flex text-center justify-content-start align-items-center gap-3">
                                      <Image
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                        }}
                                        src={location}
                                        alt="Next.js Logo"
                                      />
                                      <p className="mt-2">
                                        Tal avenu- white hills hotel, Sharm
                                        Elsheikh, Egypt
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="d-flex d-none text-center justify-content-center align-items-center">
                              <Col className="col-6">
                                <div className=" d-flex text-center justify-content-center align-items-center">
                                  <Image
                                    src={phone}
                                    alt="Next.js Logo"
                                    width="15px"
                                    height="20px"
                                    priority
                                  />
                                  <p className={styles.number}>
                                    (+20)1050777117
                                  </p>
                                </div>
                              </Col>
                              <Col className="col-6">
                                <Link
                                  className="btn btn-outline-primary"
                                  style={{
                                    color: "#0F4392",
                                    border: "1px solid #0F4392",
                                  }}
                                  href={"tel:+201050777117"}
                                >
                                  <Image
                                    src={phone}
                                    alt="Next.js Logo"
                                    width="15px"
                                    height="20px"
                                    priority
                                    style={{ marginInline: 8 }}
                                  />
                                  Call Now
                                </Link>
                              </Col>
                              <Col className="col-12 mt-3">
                                <Row>
                                  <Col className="col-1">
                                    <Image
                                      src={location}
                                      alt="Next.js Logo"
                                      width="15px"
                                      height="20px"
                                      priority
                                    />{" "}
                                  </Col>
                                  <Col>
                                    <p className={styles.number}>
                                      Tal avenu- white hills hotel, Sharm
                                      Elsheikh, Egypt
                                    </p>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>

                          <div
                            style={{ width: "95%" }}
                            onClick={() => {
                              setOpen(true);
                            }}
                          >
                            <ButtonRequestOrder
                              txtColor="white"
                              bckColor="#0F4392"
                              BRColor="#0F4392"
                              text="Request a call"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="d-block d-md-none w-100 pb-4">
              <div
                style={{
                  backgroundColor: "white",
                  width: "95%",
                  borderRadius: "15px",
                }}
                className="mt-3 mx-auto d-flex justify-content-center align-items-center flex-column"
              >
                <h4 className="mt-4 text-center" style={{ color: "#DD1717" }}>
                  We are here for you
                </h4>

                <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
                  <Image
                    src={Frame}
                    alt="Next.js Logo"
                    width="100%"
                    height="100%"
                    priority
                    style={{ maxWidth: "90%" }}
                  />
                </div>
                <h4 className={styles.textsub} style={{ marginTop: 15 }}>
                  Social media contacts
                </h4>
                <p className="text-center px-4" style={{ fontSize: "16px" }}>
                  If you need a help from our pharmacists or want to order a
                  specific prescription contact us via
                </p>
                <div className="w-100 text-center d-flex justify-content-center align-items-center">
                  <Image
                    src={telegram}
                    style={{ margin: "10px" }}
                    alt="Next.js Logo"
                    width="32px"
                    height="32px"
                    priority
                  />
                  <Image
                    src={whatsapp}
                    style={{ margin: "10px" }}
                    alt="Next.js Logo"
                    width="32px"
                    height="32px"
                    priority
                  />
                  <Image
                    src={messenger}
                    style={{ margin: "10px" }}
                    alt="Next.js Logo"
                    width="32px"
                    height="32px"
                    priority
                  />
                  <Image
                    src={viber}
                    style={{ margin: "10px" }}
                    alt="Next.js Logo"
                    width="32px"
                    height="32px"
                    priority
                  />
                </div>
                <div
                  className="my-2"
                  style={{
                    height: "1px",
                    backgroundColor: "grey",
                    width: "90%",
                  }}
                ></div>

                <h4>Reach us via</h4>
                <div className="w-90 d-flex text-center justify-content-around align-items-center flex-column w-100 px-3">
                  <div className="w-95 d-flex text-center justify-content-center align-items-center mx-5 ">
                    <Row className="d-flex text-center justify-content-center align-items-center">
                      <Col
                        className="col-12 col-sm-6 col-md-6"
                        style={{ backgroundColor: "white" }}
                      >
                        <Row>
                          <Col className="col-12 d-flex text-center justify-content-between align-items-cente">
                            <div className=" d-flex text-center justify-content-center align-items-center gap-3">
                              <Image
                                src={phone}
                                alt="Next.js Logo"
                                width="15px"
                                height="20px"
                                priority
                              />
                              <p>(+20)1050777117</p>
                            </div>
                            <Link
                              className="btn btn-outline-primary d-flex justify-content-center align-items-center gap-2 fw-bold"
                              style={{
                                width: "120px",
                                height: "40px",
                                color: "#0F4392",
                                border: "1px solid #0F4392",
                              }}
                              href={"tel:+201050777117"}
                            >
                              <Image
                                style={{ width: "14px", height: "14px" }}
                                src={phone}
                                alt="Next.js Logo"
                              />
                              Call Now
                            </Link>
                          </Col>
                          <Col className="col-12">
                            <div className="d-flex text-center justify-content-center align-items-center gap-3">
                              <Image
                                style={{ width: "24px", height: "24px" }}
                                src={location}
                                alt="Next.js Logo"
                              />
                              <p className="mt-3 text-start">
                                Tal avenu- white hills hotel, Sharm Elsheikh,
                                Egypt
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* <Row className=" d-flex d-none text-center justify-content-center align-items-center">
                  <Col className="col-6">
                    <div className=" d-flex text-center justify-content-center align-items-center ">
                      <Image
                        src={phone}
                        alt="Next.js Logo"
                        width="15px"
                        height="20px"
                        priority
                      />
                      <p className={styles.number}>(+20)1050777117</p>
                    </div>
                  </Col>
                  <Col className="col-6">
                    <button
                      className="btn btn-outline-primary"
                      style={{ color: "#0F4392", border: "1px solid #0F4392" }}
                    >
                      <Image
                        src={phone}
                        alt="Next.js Logo"
                        width="15px"
                        height="20px"
                        priority
                        style={{ marginInline: 8 }}
                      />
                      Call Now
                    </button>
                  </Col>
                  <Col className="col-12 mt-3">
                    <Row>
                      <Col className="col-1">
                        <Image
                          //  className="w-20"
                          src={location}
                          alt="Next.js Logo"
                          width="15px"
                          height="20px"
                          priority
                        />{" "}
                      </Col>
                      <Col>
                        <p className={styles.number}>
                          Tal avenu- white hills hotel, Sharm Elsheikh, Egypt
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row> */}
                  </div>

                  <div
                    style={{ width: "100%", marginBottom: "20px" }}
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <ButtonRequestOrder
                      txtColor="white"
                      bckColor="#0F4392"
                      BRColor="#0F4392"
                      text="Request a call"
                    />
                  </div>
                </div>

                <></>
              </div>
            </div>

            <div className="w-80 d-flex justify-content-start align-items-center">
              <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={snapPoints}
                className={styles.modalDesktop}
              >
                <Sheet.Container className={styles.bottomsheet}>
                  <Sheet.Header />
                  <div className="w-100 d-flex  justify-content-center align-items-center">
                    <h4 style={{ color: "#0F4392" }}>Request a call</h4>
                  </div>

                  <Sheet.Content>
                    <ModalContent setOpen={setOpen} />
                  </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
              </Sheet>
            </div>
          </>
        )}
      </main>
      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block">
        <FooterDesk />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </>
  );
};

export default contactus;
