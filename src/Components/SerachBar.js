import React, { useState } from "react";
import { Icon, Search } from "semantic-ui-react";
import { searchAllProducts } from "../Apis/products";
import { Col, Row } from "react-bootstrap";
import CardProduct from "./products/CardProduct";

const SerachBar = ({ showBigScreen }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const handleSearch = async (e) => {
    const wordSearch = e.target.value;
    const targetProducts = await searchAllProducts(wordSearch);
    if (targetProducts.count) {
      setSearchProducts(targetProducts.results);
    } else {
      setSearchProducts(0);
    }

    if (wordSearch === "") {
      setSearchProducts(0);
    }
  };

  return (
    <>
      <div
        className={`position-relative w-100 mb-2 ${
          showBigScreen ? "d-none d-md-block" : "d-block d-md-none"
        }  animate__animated animate__fadeInDown`}
        data-aos="fade-up"
      >
        <Icon
          name="search"
          className="position-absolute"
          style={{
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            opacity: "0.4",
            height: "fit-content",
          }}
        />
        <input
          type="text"
          style={{
            paddingLeft: "2.55rem",
            backgroundColor: "#f7f7f7",
            height: "50px",
          }}
          className="form-control py-2 fs-6"
          placeholder="Search products"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={handleSearch}
        />
      </div>

      {searchProducts.length > 0 ? (
        <div className="bg-white shadow-lg p-3 mb-5 rounded mt-4">
          <Row>
            {searchProducts?.map((searchProduct) => {
              return (
                <Col sm={4}>
                  <CardProduct item={searchProduct} id={searchProduct.id} />
                </Col>
              );
            })}
          </Row>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SerachBar;
