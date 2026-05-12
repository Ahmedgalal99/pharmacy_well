import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/verification.module.css";

import verification from "../assets/img/verification.png";
import Left from "../assets/img/Left.png";

import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Link from "next/link";
import ver from "../assets/desk/ver.png";
import well from "../assets/desk/well.png";
import { useRouter } from "next/router";
import left from "../assets/img/Leftwhite.png";
import NavBarMobail from "@/Components/desk/NavBarMobail";

export default function Home() {
  const [phone, setphone] = useState("us");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div
      className="text-center"
      style={{ backgroundColor: "white", height: "100vh" }}
    >
      <div className="row">
        <div className="d-sm-none">
          <NavBarMobail titlePage="Verification" sectionRight={false} />
          <main className={styles.main + " mt-0 pt-3"}>
            <div
              className={styles.background}
              style={{ height: "initial", marginBottom: "1rem" }}
            >
              <Image
                className={styles.welcome}
                src={verification}
                alt="Next.js Logo"
                priority
              />
            </div>

            <div className="d-flex justify-content-center align-items-center flex-column px-4">
              <h3 className="mt-5 text-center">
                Please enter the code that have been sent to
                <span className="text-primary ms-2">22655987411236</span>
              </h3>
            </div>
            <div
              className="d-flex justify-content-center align-items-center flex-column"
              style={{
                width: " 90%",
                borderRadius: "15px",
                marginBlock: "20px",
              }}
            >
              <form className="d-flex justify-content-center flex-column w-100">
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <input
                    style={{
                      width: "65px",
                      height: "50px",
                      border: "1px solid #AEB4B9",
                      boxShadow: "0px 4px 4px 0px #0000001F",
                    }}
                    type="text"
                    className="form-control p-2 text-center"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                  <input
                    style={{
                      width: "65px",
                      height: "50px",
                      border: "1px solid #AEB4B9",
                      boxShadow: "0px 4px 4px 0px #0000001F",
                    }}
                    type="text"
                    className="form-control p-2 text-center"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                  <input
                    style={{
                      width: "65px",
                      height: "50px",
                      border: "1px solid #AEB4B9",
                      boxShadow: "0px 4px 4px 0px #0000001F",
                    }}
                    type="text"
                    className="form-control p-2 text-center"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                  <input
                    style={{
                      width: "65px",
                      height: "50px",
                      border: "1px solid #AEB4B9",
                      boxShadow: "0px 4px 4px 0px #0000001F",
                    }}
                    type="text"
                    className="form-control p-2 text-center"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                </div>

                <Link href="/login" className="w-100 mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 mt-4 w-100"
                  >
                    Verify
                  </button>
                </Link>
              </form>
            </div>

            <h4 className="mt-1 mb-0">Didn’t receive the code?</h4>
            <h5
              className="text-primary mt-2 fw-bold  "
              style={{ color: "#2C6ECB" }}
            >
              Resend code
            </h5>
          </main>
        </div>
        <div className="d-none d-md-block">
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ minHeight: "100vh" }}
          >
            <div className="divlogosignup">
              <Image
                style={{
                  width: "381px",
                  height: "122px",
                }}
                src={well}
                alt="Next.js Logo"
                priority
              />

              <Image
                style={{
                  width: "594px",
                  height: "444px",
                }}
                src={ver}
                alt="Next Logo"
                priority
              />
            </div>

            <div className="divsignup d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <h4 className="m-3 font-xs-16 fw-bold">
                  Welcome to Well+ pharmacy
                </h4>
                <h5
                  style={{
                    color: "#DD1717",
                    fontWeight: "400",
                    marginBottom: "10px",
                  }}
                >
                  live healthy … live well
                </h5>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column mt-4"
                style={{
                  backgroundColor: "rgba(15, 67, 146, 0.07)",
                  borderRadius: "3%",
                  width: "488px",
                  height: "385px",
                }}
              >
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <h2 className="text-primary">Verification</h2>
                  <h4 className="text-center px-5">
                    Please enter the code that has been sent to
                    <span className="text-primary ms-1">22655987411236</span>
                  </h4>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{
                    width: " 90%",
                    borderRadius: "15px",
                    marginBlock: "20px",
                  }}
                >
                  <form className="d-flex justify-content-center flex-column w-100">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <input
                        style={{
                          width: "96px",
                          height: "50px",
                          border: "1px solid #AEB4B9",
                          boxShadow: "0px 4px 4px 0px #0000001F",
                        }}
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                      <input
                        style={{
                          width: "96px",
                          height: "50px",
                          border: "1px solid #AEB4B9",
                          boxShadow: "0px 4px 4px 0px #0000001F",
                        }}
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                      <input
                        style={{
                          width: "96px",
                          height: "50px",
                          border: "1px solid #AEB4B9",
                          boxShadow: "0px 4px 4px 0px #0000001F",
                        }}
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                      <input
                        style={{
                          width: "96px",
                          height: "50px",
                          border: "1px solid #AEB4B9",
                          boxShadow: "0px 4px 4px 0px #0000001F",
                        }}
                        type="text"
                        className="form-control p-2 text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="0"
                      />
                    </div>

                    <Link href="/login" className="w-100">
                      <button
                        type="submit"
                        className="btn btn-primary mb-1 mt-4 w-100"
                        style={{ fontSize: "20px" }}
                      >
                        Verify
                      </button>
                    </Link>
                  </form>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-3">
                  <h5 className="me-4 mb-0 fw-normal">
                    Didn’t receive the code?
                  </h5>
                  <h5 className="ms-4 mb-0" style={{ color: "#2C6ECB" }}>
                    Resend code
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
