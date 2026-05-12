import React, { useEffect, useState } from "react";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import NavBar from "../Components/desk/NavBar";
import NavBarMobaile from "../Components/desk/NavBarMobail";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";
import Link from "next/link";
import SizesExample from "../Components/Spinner";
import getAllReviews from "../Apis/Testimonails";

const allreview = () => {
  const [open, setOpen] = useState(false);
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setisLoadingPage(false);
  }, []);

  const [reviews, setReviews] = useState([]);
  const getReviewsData = async () => {
    const res = await getAllReviews();
    console.log(res, "ressss");
    setReviews(res?.results);
    return res;
  };
  useEffect(() => {
    getReviewsData();
  }, []);
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(JSON.parse(localStorage?.getItem("user")));
    }
  }, []);
  useEffect(() => {
    if (user) {
      setOpenReview(true);
    }
  }, [user]);
  const myStyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)", // define the box shadow
    padding: "10px",
    backgroundColor: "#f0f0f0",
  };
  return (
    <>
      <NavBar />
      <NavBarMobaile titlePage="Testimonials" />
      {isLoadingPage ? (
        <SizesExample />
      ) : (
        <>
          <Container className="padding-bottom-sm">
            <Breadcrumb
              style={{ fontSize: "18px" }}
              className="d-none d-lg-block mt-3"
            >
              <Breadcrumb.Item linkAs={Link} href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>All reviews</Breadcrumb.Item>
            </Breadcrumb>

            <h1
              className="text-center h3 my-4 d-none d-lg-block fw-bold"
              style={{ color: "#0F4392" }}
            >
              All reviews
            </h1>

            <Row>
              {reviews?.map((item) => {
                return (
                  <Col md={4}>
                    <Testimonialdesk item={item} />
                  </Col>
                );
              })}
            </Row>
          </Container>

          <div
            className="actio p-4 bg-white position-fixed bottom-0 start-0 w-100 d-block d-md-none"
            style={{ boxShadow: "0px -18px 40px 0px #00000033" }}
          >
            <Link href="/review" className="btn btn-primary w-100">
              Write a review
            </Link>
          </div>

          <WriteReview setOpen={setOpenReview} open={openReview} />
        </>
      )}

      <Support />
    </>
  );
};

export default allreview;
