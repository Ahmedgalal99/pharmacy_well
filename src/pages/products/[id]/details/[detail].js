import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../../../Components/desk/NavBar";
import NavBarMobail from "../../../../Components/desk/NavBarMobail";
import Image from "next/image";
import { Breadcrumb, Button, Col, Container, Row } from "react-bootstrap";
import SerachBar from "../../../../Components/SerachBar";
import SliderProductDetails from "../../../../Components/products/SliderProductDetails";
import Quantity from "../../../../Components/Ulits/Quantity";
import accept from "../../../../assets/img/mobile-accept_major.png";
import WriteReview from "../../../../Components/Ulits/WriteReview";
import Support from "../../../../Components/Ulits/Support";
import { useRouter } from "next/router";
import gettAllProducts, { GetOneProduct } from "../../../../Apis/products";
import FooterDesk from "../../../../Components/desk/FooterDesk";
import PostCart from "../../../../Apis/Cart/PostCart";
import Link from "next/link";
import SizesExample from "../../../../Components/Spinner";

const products = () => {
  const [products, setproducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [response, setresponse] = useState(null);
  const [details, setDetails] = useState(null);
  const [user, setUser] = useState(false);
  const router = useRouter();
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  const { id, detail } = router.query;
  // console.log(id, "idd");/
  // const details = useSelector((state) => state.ProductDetails.details);
  const SendCartFun = async (e) => {
    const formData = {
      product: id,
      quantity: 1,
    };

    const res = await PostCart(formData);
    // console.log(res, "ress");
    setresponse(res);
    setTimeout(() => {
      setresponse(null);
    }, 4000);
    return res;
  };
  const GetOneProductApi = async () => {
    const res = await GetOneProduct({ id: detail });
    setDetails(res);
    if (res) {
      setisLoadingPage(false);
    }
    return res;
  };

  useEffect(() => {
    if (id) {
      GetOneProductApi();
    }
  }, [id]);
  const handleClick = () => {
    if (user) {
      setLoading(true);
    } else {
      router.push("/login");
    }
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

  // console.log(products);

  return (
    <div className="product-details mb-2">
      <NavBar />
      <NavBarMobail titlePage="Products details" />
      {isLoadingPage ? (
        <SizesExample />
      ) : (
        <Container className="mt-3 pb-5">
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
            <Breadcrumb.Item active>Products details</Breadcrumb.Item>
          </Breadcrumb>
          <SerachBar showBigScreen={true} />

          <h1
            className="text-center h3 my-4 d-none d-md-block fw-bold"
            style={{ color: "#0F4392" }}
          >
            Product details
          </h1>
          {response && (
            <div
              className="message w-100 d-flex justify-content-start align-items-center gap-4 py-2 px-3 mb-4 rounded-3"
              style={{
                backgroundColor: "#219653",
                color: "white",
                boxShadow:
                  "0px 8px 20px -4px #1718181F, 0px 3px 6px -3px #17181814",
              }}
            >
              <Image src={accept} alt="" />
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                {response?.quantity} panadol Extra have been added to your
                requests
              </p>
            </div>
          )}

          <Row className="px-3">
            <Col
              sm={12}
              md={6}
              className="bg-white py-3 rounded-4"
              style={{
                boxShadow: "0px 18px 40px 0px #0000001F",
              }}
            >
              {details?.images.length > 0 ? (
                <SliderProductDetails list={details?.images} />
              ) : (
                <img style={{ width: "100%" }} src={details?.home_image} />
              )}
            </Col>
            <Col sm={12} md={6}>
              <div className="details mt-4 mt-lg-0">
                <div
                  className="top"
                  style={{
                    borderBottom: "0.5px solid #828282",
                  }}
                >
                  <h5 className="fw-bold mb-1" style={{ fontSize: "1.2rem" }}>
                    {/* Product category */}
                    {details?.category?.name}
                  </h5>
                  <h2 className="mt-4 mb-2">{details?.name}</h2>
                  <p style={{ fontSize: "1.5rem", color: "#828282" }}>
                    {details?.short_description}
                  </p>

                  <Button
                    variant="primary"
                    className="w-95"
                    onClick={!isLoading ? handleClick : null}
                  >
                    {isLoading ? "Loading…" : "Make A Request"}
                  </Button>
                </div>
                <div className="bottom mt-3">
                  <h6
                    className="fw-bold mb-1 text-primary"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Product details
                  </h6>
                  <h3 className="mt-4 mb-2">Panadol Extra XX mg</h3>
                  <p className="mb-1 fs-5">Brand: {details?.brand}</p>
                  <p className="mb-1 fs-5">
                    Active ingredients : {details?.active_ingredient}{" "}
                  </p>
                  <p className="mb-1 fs-5">Use: {details?.short_description}</p>
                  <p className="mb-1 fs-5">
                    Russian similar: {details?.russian_similar}
                  </p>
                  <p
                    className="mb-1 fs-5"
                    style={{ fontSize: "1.5rem", color: "#4f4f4f" }}
                  >
                    {details?.description}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      <FooterDesk />

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </div>
  );
};

export default products;
