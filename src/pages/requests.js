import React, { useState, useEffect } from "react";
import CardInfo from "../Components/Requests/CardInfo";
import CardOrder from "../Components/Requests/CardOrder";
import CardOrderDesk from "../Components/Requests/CardOrderDesk";
import BottomNav from "../Components/Ulits/BottomNav";
import InputWithButton from "../Components/Requests/InputWithButton";
import NavBar from "@/Components/desk/NavBar";
import { Breadcrumb, Col, Collapse, Container, Row } from "react-bootstrap";
import FooterDesk from "@/Components/desk/FooterDesk";

import GetCart from "../Apis/Cart/GetCart";
import PostCart, { CreateOrder, getOrders } from "../Apis/Cart/PostCart";
import NavBarMobail from "@/Components/desk/NavBarMobail";
import CardInfoDesk from "../Components/Requests/CardInfoDesk";
import circleCancel from "../assets/img/circle-cancel_minor.png";
import Image from "next/image";
import WriteReview from "@/Components/Ulits/WriteReview";
import Support from "@/Components/Ulits/Support";

import { useRouter } from "next/router";
import Link from "next/link";
import SizesExample from "../Components/Spinner";

const requests = () => {
  const router = useRouter();
  const circleStyle = {
    backgroundColor: "#0F4392",
    height: "32px",
    width: "32px",
    marginRight: "10px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
  };
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  const [CartList, setCartList] = useState([]);

  const [order, setOrder] = useState(null);

  const GetCartFun = async () => {
    const res = await GetCart();
    setCartList(res?.cart_items);
    setisLoadingPage(false);
    return res;
  };
  const GetOrderFun = async () => {
    const res = await getOrders();
    setOrder(res);
    console.log(res, "ressss");
    return res;
  };
  useEffect(() => {
    GetCartFun();
    GetOrderFun();
  }, []);
  // console.log(CartList);
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setuser(JSON.parse(localStorage?.getItem("user")));
    }

    if (!localStorage.getItem("user")) {
      router.push("/login");
    }
  }, []);

  const [promocode, setPromocode] = useState("");
  const handlePromoCode = (e) => setPromocode(e.target.value);
  const CreateOrderApi = async () => {
    const res = await CreateOrder();
    setTimeout(() => {
      router.push("/confirmation");
    }, 500);
  };
  useEffect(() => {
    CartList?.length <= 0 && order
      ? router.push(`/tracking?orderId=${order?.id}`)
      : null;
  }, [CartList, order]);
  return (
    <main style={{ backgroundColor: "#eaeaea", width: "100%" }}>
      <NavBarMobail titlePage="My orders" />

      <NavBar />
      {isLoadingPage ? (
        <SizesExample />
      ) : (
        <>
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
              <Breadcrumb.Item active>My orders</Breadcrumb.Item>
            </Breadcrumb>
          </Container>
          {CartList?.length > 0 && (
            <div className="d-block d-md-none">
              <div className="place-order bg-white py-3 px-2">
                <div
                  className="w-100 d-flex flex-column justify-items-center align-items-start"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                    <div style={circleStyle}>
                      <span>4</span>
                    </div>
                    <p
                      style={{
                        color: "#0F4392",
                        fontSize: "18px",
                      }}
                    >
                      Products have been selected
                    </p>
                  </div>
                  <button
                    className="btn btn-primary bubbly-button w-100 fs-5"
                    onClick={CreateOrderApi}
                  >
                    Place order
                  </button>
                  <p
                    className="text-center mt-2"
                    style={{ fontSize: "12px", color: "#DD1717" }}
                  >
                    Note that: your order will not be confirmed before you
                    receive a call from us to let you know your order price to
                    confirm.
                  </p>
                </div>
              </div>

              <div>
                <div
                  style={{ width: "90%", margin: "auto" }}
                  className="padding-bottom-sm"
                >
                  <div className="flex-column d-flex justify-content-start align-items-center mt-4 pb-4">
                    <div
                      className="me-1 d-flex justify-content-start align-items-center"
                      style={{ width: "100%" }}
                    >
                      <h3 className="mb-2">Your Info</h3>
                    </div>
                    <div
                      className="mt-1 d-flex justify-content-start align-items-center"
                      style={{ width: "100%" }}
                    >
                      <CardInfo user={user} />
                    </div>
                    <div
                      className="mt-5 me-1 d-flex justify-content-start align-items-center"
                      style={{ width: "100%" }}
                    >
                      <h3>Your Order</h3>
                    </div>

                    <div
                      className="d-flex justify-content-start flex-column align-items-center"
                      style={{ width: "100%" }}
                    >
                      {CartList?.map((item, i) => (
                        <CardOrder key={i} item={item} />
                      ))}
                    </div>

                    <div
                      className="me-1 d-flex justify-content-start align-items-center d-block d-sm-none"
                      style={{ width: "100%" }}
                    >
                      <h4 className="mt-3">Promocodes</h4>
                    </div>
                    <div
                      style={{ width: "100%" }}
                      className="my-4 d-block d-sm-none"
                    >
                      <InputWithButton />
                    </div>
                  </div>

                  <div
                    className="position-relative"
                    style={{ bottom: 0, width: "100%", borderRadius: "15px" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div className="d-none d-md-block py-5">
            <h1
              className="text-center h3 my-4 d-none d-lg-block fw-bold"
              style={{ color: "#0F4392" }}
            >
              My orders
            </h1>

            <Container className="pb-4">
              <h2>Your info</h2>
              <Row>
                <Col md={6}>
                  <CardInfoDesk user={user} />
                  <h2>Your orders</h2>
                  {CartList?.map((item, i) => (
                    <CardOrderDesk key={i} item={item} />
                  ))}
                </Col>
                {CartList?.length > 0 && (
                  <Col md={6}>
                    <div
                      className="promocode bg-white py-4 px-3 rounded-2"
                      style={{ height: "319px" }}
                    >
                      <h5>Promocodes</h5>
                      <div className="position-relative">
                        <input
                          type="text"
                          placeholder="well20"
                          value={promocode}
                          onChange={handlePromoCode}
                          className="form-control text-primary"
                        />
                        <Image
                          src={circleCancel}
                          alt=""
                          width={20}
                          height={20}
                          className="position-absolute"
                          style={{
                            top: "50%",
                            right: "10px",
                            cursor: "pointer",
                            transform: "translateY(-50%)",
                          }}
                          onClick={() => setPromocode("")}
                        />
                      </div>

                      <div className="d-flex justify-content-start align-items-center gap-2 my-3">
                        <div style={circleStyle}>
                          <span>4</span>
                        </div>
                        <p
                          style={{
                            color: "#0F4392",
                            fontSize: "18px",
                          }}
                        >
                          Products have been selected
                        </p>
                      </div>
                      <button
                        className="btn btn-primary bubbly-button p-2 m-0 w-100 fs-5"
                        onClick={CreateOrderApi}
                      >
                        Place order
                      </button>
                      <p
                        className="text-center mt-3"
                        style={{ fontSize: "16px", color: "#DD1717" }}
                      >
                        Note that: your order will not be confirmed before you
                        receive a call from us to let you know your order price
                        to confirm.
                      </p>
                    </div>
                  </Col>
                )}
              </Row>
            </Container>
          </div>
        </>
      )}

      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block">
        <FooterDesk />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </main>
  );
};

export default requests;
