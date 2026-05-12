import React from "react";
import NavBar from "../../Components/desk/NavBar";
import styles from "@/styles/products.module.css";
import { Col, Row } from "react-bootstrap";
import Testimonial from "../../Components/app/Testimonail";
import Header from "../../Components/Ulits/Header";
import ButtonTrack from "../../Components/tracking/ButtonTrack";

function allReviews() {
  return (
    <div>
      <div className="d-block d-sm-none">
        <Header title="Testimonials" />
      </div>

      <div className="d-none d-sm-block w-100 ">
        <NavBar />
      </div>
      <main className={styles.main} style={{ backgroundColor: "transparent" }}>
        <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
          <h5 className="text-primary d-none d-sm-block w-100 mt-5">
            {" "}
            All reviews
          </h5>
          <Row style={{ width: "100%", marginBottom: "100px" }}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1].map((item) => {
              return (
                <Col className="col-12 col-sm-4 col-md-4">
                  <Testimonial />
                </Col>
              );
            })}
          </Row>
          <ButtonTrack
            txtColor="white"
            bckColor="#0F4392"
            BRColor="#0F4392"
            text="Write a review"
          />
        </div>
      </main>
    </div>
  );
}

export default allReviews;
