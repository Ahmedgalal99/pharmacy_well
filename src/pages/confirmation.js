import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NavBar from "../Components/desk/NavBar";
import Header from "../Components/Ulits/Header";
import ButtonConfirmation from "../Components/Requests/ButtonConfirmation";
import BottomNav from "../Components/Ulits/BottomNav";
import FooterDesk from "../Components/desk/FooterDesk";
// CSS Module
import styles from "@/styles/confirmation.module.css";
// IMGS
import vector from "../assets/img/vector.png";
import NavBarMobail from "../Components/desk/NavBarMobail";
import { useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  padding: "7px",
};

const confirmation = () => {
  const [modalShow, setModalShow] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const GotItFun = () => {
    router.push("/");
  };

  return (
    <>
      <NavBar />
      <main
        style={{ backgroundColor: "#eaeaea", width: "100%", margin: "auto" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <div className="d-block d-sm-none w-100 padding-bottom-sm">
          <NavBarMobail titlePage="Confirmation" />
          <div
            className="d-flex justify-content-center confirm-custom align-items-center flex-column mt-3 p-0"
            style={{ backgroundColor: "#eaeaea" }}
          >
            <div className="d-flex justify-content-center align-items-center mb-2">
              <h2 className="text-primary h1 fw-bold mt-1">Thank you</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-1">
              <Image
                className="w-100"
                src={vector}
                height={150}
                alt="Next.js Logo"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column mt-3 ">
              <h2
                className="fw-normal mt-3 text-center"
                style={{ fontSize: "21px" }}
              >
                Your order has been placed succesfully , you will receice a call
                to confirm.
              </h2>

              <p
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: "1.2rem",
                  marginTop: "20px",
                }}
              >
                Get Well Soon!
              </p>
            </div>
            <div className="w-100  d-flex justify-content-center align-items-center mt-3">
              <ButtonConfirmation
                clicking={handleOpen}
                txtColor="#DD1717"
                bckColor="white"
                BRColor="#DD1717"
                text="Cancel order"
              />
              <ButtonConfirmation
                txtColor="white"
                bckColor="#0F4392"
                BRColor="#0F4392"
                text="Got it"
                clicking={GotItFun}
              />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center mt-3">
              <h4 className="text-primary" style={{ color: "#2C6ECB" }}>
                Track your order
              </h4>
            </div>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
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
                  >
                    Order Cancellation
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    className="text-center"
                  >
                    <p className="m-0">Are you sure you want to cancel</p>
                    <p className="m-0">your order ?</p>

                    <div className="w-100  d-flex justify-content-center align-items-center mt-3">
                      <ButtonConfirmation
                        txtColor="red"
                        bckColor="white"
                        BRColor="red"
                        text="Yes Cancel "
                      />
                      <ButtonConfirmation
                        txtColor="white"
                        bckColor="#0F4392"
                        BRColor="#0F4392"
                        text="Keep it "
                      />
                    </div>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>

        <div className="d-none d-md-flex justify-content-center w-100">
          <div className="d-flex justify-content-center confirm-custom align-items-center flex-column mt-5">
            <div className="d-flex justify-content-center align-items-center mb-2">
              <h2 className="text-primary h1 fw-bold">Thank you</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-1">
              <Image src={vector} width={200} height={200} alt="Next.js Logo" />
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column mt-3 ">
              <h2 className="px-5 fw-normal mt-3 text-center">
                Your order has been placed succesfully , you will receice a call
                to confirm.
              </h2>

              <p
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: "1.2rem",
                  marginTop: "20px",
                }}
              >
                Get Well Soon!
              </p>
            </div>
            <div className="w-100  d-flex justify-content-center align-items-center mt-3">
              <ButtonConfirmation
                clicking={handleOpen}
                txtColor="red"
                bckColor="white"
                BRColor="red"
                text="Cancel order"
              />
              <ButtonConfirmation
                txtColor="white"
                bckColor="#0F4392"
                BRColor="#0F4392"
                text="Got it"
                clicking={GotItFun}
              />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center mt-3">
              <h5 className="text-primary">Track your order</h5>
            </div>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
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
                  >
                    Order Cancellation
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    className="text-center"
                  >
                    <p className="m-0">Are you sure you want to cancel</p>
                    <p className="m-0">your order ?</p>

                    <div className="w-100  d-flex justify-content-center align-items-center mt-3">
                      <ButtonConfirmation
                        txtColor="red"
                        bckColor="white"
                        BRColor="red"
                        text="Yes Cancel "
                      />
                      <ButtonConfirmation
                        txtColor="white"
                        bckColor="#0F4392"
                        BRColor="#0F4392"
                        text="Keep it "
                      />
                    </div>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </main>
      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block ">
        <FooterDesk />
      </div>
    </>
  );
};

export default confirmation;
