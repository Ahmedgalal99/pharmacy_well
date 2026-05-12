import React, { useRef, useState } from "react";
import styles from "@/styles/Tracking.module.css";
import StepProgress from "../Components/Ulits/StepProgressBar";
import Group from "../assets/img/Group.png";
import Image from "next/image";
import Group2 from "../assets/img/Group2.png";
import vector from "../assets/img/vector.png";
import NavBarMobail from "../Components/desk/NavBarMobail";
import NavBar from "../Components/desk/NavBar";
import FooterDesk from "../Components/desk/FooterDesk";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";
import { Breadcrumb, Container } from "react-bootstrap";
import Link from "next/link";
import { useEffect } from "react";
import { getOrderHistory } from "../Apis/Cart/PostCart";
import { useRouter } from "next/router";
import BottomNav from "../Components/Ulits/BottomNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReviewDesk from "../Components/desk/ReviewDesk";

const tracking = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "2px solid white",
    borderRadius: "10px",
    padding: "7px",
  };
  const [openReview, setOpenReview] = useState(false);

  const router = useRouter();
  const modalAddReview = useRef();
  const [widthScreen, setWidthScreen] = useState(0);
  const { orderId } = router.query;
  const [value, setvalue] = useState(50);
  const getOrderHistoryCall = async () => {
    const res = await getOrderHistory({ id: orderId });
    console.log(res, "resres");
    if (res?.status == "Received") {
      setvalue(0);
    } else if (res?.status == "Prepared") {
      setvalue(35);
    } else if (res?.status == "ON_ITS_WAY") {
      setvalue(70);
    } else {
      setvalue(100);
    }
  };
  useEffect(() => {
    if (orderId) {
      getOrderHistoryCall();
    }
    setWidthScreen(window.innerWidth);
  }, [orderId]);
  const BackCall = () => {
    router.push(`/products/all`);
  };
  return (
    <div style={{ backgroundColor: "#eaeaea" }}>
      <NavBar />
      <NavBarMobail titlePage="Order tracking" />
      <Container>
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
          <Breadcrumb.Item linkAs={Link} href="/requests">
            Requests
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href="/confirmation">
            Confirmation
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Order tracking</Breadcrumb.Item>
        </Breadcrumb>
        <main className="w-100 d-flex justify-content-center">
          <div className="d-flex justify-content-center confirm-custom-grey align-items-center flex-column">
            <h4 className="text-primary fs-3">Order Tracking</h4>
            <StepProgress value={value} />
            <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
              {value < 34 && (
                <div className="d-flex w-100 justify-content-center align-items-center m-4 flex-column">
                  <Image
                    src={Group}
                    className="me-5"
                    style={{
                      marginBottom: "20px",
                      width: "100%",
                      margin: "auto",
                    }}
                    alt="Next.js Logo"
                    width="100%"
                    height="100%"
                    priority
                  />
                  <div className="w-95 text-center d-flex justify-content-center align-items-center flex-column">
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.
                    </p>
                  </div>

                  <div className="w-100">
                    <div className="w-100">
                      <button
                        className="btn  btn-primary mt-5  pr-5 pl-5"
                        style={{ fontSize: "20px", width: "90%" }}
                        onClick={BackCall}
                      >
                        Back to our products
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {value == 35 && (
                <div className="d-flex w-100 justify-content-center align-items-center  m-4 flex-column">
                  <Image
                    //  className="w-20"
                    src={Group}
                    className="me-5"
                    style={{
                      marginBottom: "30px",
                      marginLeft: "25px",
                      width: "100%",
                      margin: "auto",
                    }}
                    alt="Next.js Logo"
                    width="100%"
                    height="100%"
                    priority
                  />
                  <div className="w-80 text-center d-flex justify-content-center align-items-center flex-column">
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.{" "}
                    </p>
                  </div>

                  <div className="w-100">
                    <div className="w-100">
                      <button
                        className="btn  btn-primary mt-5  pr-5 pl-5"
                        onClick={BackCall}
                        style={{ fontSize: "20px", width: "90%" }}
                      >
                        {" "}
                        Back to our products
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {value == 70 && (
                <div className="d-flex w-100 justify-content-center align-items-center flex-column">
                  <Image
                    //  className="w-20"
                    src={Group2}
                    className="me-5"
                    style={{
                      marginBottom: "30px",
                      marginLeft: "25px",
                      width: "100%",
                      margin: "auto",
                    }}
                    alt="Next.js Logo"
                    width="100%"
                    height="100%"
                    priority
                  />
                  <div className="w-80 text-center d-flex justify-content-center align-items-center flex-column">
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.{" "}
                    </p>
                  </div>

                  <div className="w-100">
                    <div className="w-100">
                      <button
                        className="btn w-100 btn-primary mt-5  pr-5 pl-5"
                        style={{ fontSize: "20px" }}
                        onClick={BackCall}
                      >
                        {" "}
                        Back to our products
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {value == 100 && (
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className={styles.Bigcircle}>
                    <div
                      className={styles.circle}
                      // style={{ backgroundColor: "#0f439242" }}
                    >
                      <div
                        className=" d-flex justify-content-center align-items-center mt-3 "
                        // style={{ position: "absolute" }}
                      >
                        <Image
                          //  className="w-20"
                          src={vector}
                          style={{
                            position: "absolute",
                            // bottom: "-24px",
                            // left: "-66px",
                          }}
                          alt="Next.js Logo"
                          width={165}
                          height={130}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-80 text-center d-flex justify-content-center align-items-center flex-column">
                    <p>
                      Your order has een delivered successfully. We wish you
                      speedy recovery.{" "}
                    </p>
                  </div>
                  <div className="w-100">
                    <button
                      className="btn w-100 btn-primary mt-5  pr-5 pl-5"
                      style={{ fontSize: "20px" }}
                      onClick={() => {
                        if (localStorage.getItem("user")) {
                          if (widthScreen < 700) {
                            router.push("/review");
                          } else {
                            router.push("/testimonials");
                            setTimeout(() => {
                              setOpenReview(true);
                            }, 500);
                            //
                          }
                        } else {
                          router.push("/testimonials");
                        }
                      }}
                    >
                      Write a review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </Container>

      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block">
        <FooterDesk />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />

      <Modal
        ref={modalAddReview}
        open={openReview}
        onClose={() => setOpenReview(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center"
            style={{
              color: "#0F4392",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="text-center"
          >
            <ReviewDesk modalAddReview={modalAddReview} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default tracking;
