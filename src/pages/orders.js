import React, { useState, useEffect } from "react";
import BottomNav from "../Components/Ulits/BottomNav";
import NavBar from "@/Components/desk/NavBar";
import { Breadcrumb, Col, Collapse, Container, Row } from "react-bootstrap";
import FooterDesk from "@/Components/desk/FooterDesk";
import Spinner from "react-bootstrap/Spinner";
import PostCart, {
  CreateOrder,
  getAllOrdersHistory,
} from "../Apis/Cart/PostCart";
import NavBarMobail from "@/Components/desk/NavBarMobail";
import WriteReview from "@/Components/Ulits/WriteReview";
import Support from "@/Components/Ulits/Support";
import { useRouter } from "next/router";
import Link from "next/link";
import SizesExample from "../Components/Spinner";

const requests = () => {
  const router = useRouter();
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);
  const [orders, setOrders] = useState(null);

  const GetOrderFun = async () => {
    const res = await getAllOrdersHistory();
    setisLoadingPage(false);

    if (res.message == "well_medic_you_did_not_have_cart_to_make_order") {
    } else {
      setOrders(res?.results);
    }
    console.log(res, "ressss");
    return res;
  };
  useEffect(() => {
    GetOrderFun();
  }, []);
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setuser(JSON.parse(localStorage?.getItem("user")));
    }

    if (!localStorage.getItem("user")) {
      router.push("/login");
    }
  }, []);

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

          <div className=" py-5">
            <h1
              className="text-center h3 my-4 d-none d-lg-block fw-bold"
              style={{ color: "#0F4392" }}
            >
              My orders
            </h1>
            {orders ? (
              <Row className=" d-flex">
                {orders?.map((item, i) => (
                  <Col md={6} className="mb-3">
                    <Row className=" m-2 align-items-center">
                      <Link href={`/tracking?orderId=${item?.id}`}>
                        <div className="card">
                          <span className="card1" href="#">
                            <p>Status : {item?.status}</p>
                            <p className="small">Order Id : {item?.order_id}</p>
                            <div className="go-corner" href="#">
                              <div className="go-arrow">→</div>
                            </div>
                          </span>
                        </div>
                      </Link>
                    </Row>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
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
