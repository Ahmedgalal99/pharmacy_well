import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

// UI library
import Sheet from "react-modal-sheet";
import { ImageGroup } from "semantic-ui-react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

// CSS Module
import styles from "@/styles/products.module.css";

// Components
import NavBar from "../../Components/desk/NavBar";
import NavBarMobail from "../../Components/desk/NavBarMobail";
import exit from "../../assets/img/exit.png";
import FooterDesk from "../../Components/desk/FooterDesk";
import SearchInput from "../../Components/products/SearchInput";
import ButtonContact from "../../Components/products/ButtonContact";
import CardProduct from "../../Components/products/CardProduct";
import DropdownFilter from "../../Components/products/DropdownFilter";
import Filter from "../../Components/desk/Filter";
import SerachBar from "../../Components/SerachBar";
import WriteReview from "../../Components/Ulits/WriteReview";
import Support from "../../Components/Ulits/Support";
import BottomNav from "../../Components/Ulits/BottomNav";

// Images and icon
import iconfilter from "../../assets/img/iconfilter.png";

// Logic Api
import getallProducts from "../../Apis/products";

import { getallProductsWithNoCategory } from "../../Apis/products";
import SliderFilterButton from "../../Components/products/SliderFilterButton";
import getAllCategories, {
  getallBrandsApi,
  getallDiseaseApi,
  getallIngredientApi,
  getallUsesApi,
} from "../../Apis/Category";
import SizesExample from "../../Components/Spinner";

import ReactPaginate from "react-paginate";

const products = () => {
  const [isOpen, setOpen] = useState(false);
  const [products, setproducts] = useState([]);
  const router = useRouter();
  const [inLogin, setInLogin] = useState(false);
  const { id } = router.query;
  const [categories, setcateogies] = useState([]);
  const [activeCateFilter, setactiveCateFilter] = useState("all");
  const [isLoading, setisLoading] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  const [diseases, setDiseases] = useState([]);
  const [selectedDisease, setselectedDisease] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [selectedingredient, setselectedingredient] = useState("");

  const [brand, setbrand] = useState([]);
  const [selectedBrand, setselectedBrand] = useState("");

  const [uses, setuses] = useState([]);
  const [selectedUse, setselectedUse] = useState("");
  const snapPoints = [600, 450]; // Define the height values that the modal can snap to
  const [active, setActive] = useState(1);
  const [items, setitems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  console.log(active, "active global");
  useEffect(() => {}, [items]);

  const getHomeData = async () => {
    if (activeCateFilter == "all") {
      const res = await getallProductsWithNoCategory({ active });
      setPageCount(res.count);
      setproducts(res?.results);
      setitems(Math.floor(res?.count / 20));
      if (res?.results) {
        setisLoading(false);
      }
      return res;
    } else {
      const res = await getallProducts({
        category: activeCateFilter,
        ingredients: selectedingredient,
        diseases: selectedDisease,
        uses: selectedUse,
        active,
      });
      setproducts(res?.results);
      if (res?.results) {
        setisLoading(false);
      }
      return res;
    }
  };
  const ApplyFilter = async () => {
    setisLoading(true);

    const res = await getallProducts({
      // id: activeCateFilter,
      ingredients: selectedingredient,
      diseases: selectedDisease,
      uses,
      selectedUse,
    });
    setOpen(false);
    setproducts(res?.results);
    if (res?.results) {
      setisLoading(false);
    }
    return res;
  };
  const ClearFilter = () => {
    setselectedBrand("");
    setselectedDisease("");
    setselectedUse("");
    setselectedingredient("");
  };

  const getAllCategoriess = async () => {
    const res = await getAllCategories();
    console.log(res, "ressss");
    setcateogies(res?.results);
    return res;
  };
  const getallDisease = async () => {
    // const res = await getallDiseaseApi();
    // console.log(res, "ressss");
    // // setDiseases(res?.results);
    // return res;
  };
  const getallBrands = async () => {
    // const res = await getallBrandsApi();
    // console.log(res, "ressss");
    // // setbrand(res?.results);
    // return res;
  };
  const getallUses = async () => {
    const res = await getallUsesApi();
    console.log(res, "ressss");
    setuses(res);
    return res;
  };
  const getallingredients = async () => {
    // const res = await getallIngredientApi();
    // console.log(res, "ressss");
    // setIngredients(res);
    // return res;
  };
  useEffect(() => {
    getHomeData();
    getAllCategoriess();
    getallDisease();
    getallBrands();
    getallingredients();
    getallUses();
    if (localStorage.getItem("user")) {
      setInLogin(true);
    }
  }, []);
  useEffect(() => {
    getHomeData();
  }, [activeCateFilter, active]);

  const handlePageClick = (e) => {
    setActive(e.selected + 1);
    router.push(`/products/all/?page=${e.selected + 1}`);
  };

  return (
    <div className="product-details">
      <NavBar />
      <div
        style={{
          backgroundColor: "#0F4392",
        }}
      >
        <NavBarMobail titlePage="Our products" />
        <div className="w-100 py-4 d-flex justify-content-center d-flex d-sm-none align-items-center flex-column">
          <div
            style={{ width: "95%" }}
            className="d-flex justify-content-between mx-3 align-items-center flex-row-reverse mt-2"
          >
            <button
              onClick={() => setOpen(true)}
              disabled={inLogin}
              className={styles.boxfilter}
            >
              <Image
                src={iconfilter}
                className={styles.iconfilter}
                alt="Next.js Logo"
                width={14}
                height={16}
                priority
              />

              <p className={styles.txtfilter}>Filter</p>
            </button>
            <SearchInput setProducts={setproducts} />
          </div>
        </div>
      </div>
      {isLoading ? (
        <SizesExample />
      ) : (
        <Container className="px-0">
          <Breadcrumb
            style={{ fontSize: "18px" }}
            className="d-none d-lg-block mt-3"
          >
            <Breadcrumb.Item linkAs={Link} href="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Our products</Breadcrumb.Item>
          </Breadcrumb>

          <h1
            className="text-center h3 my-4 d-none d-lg-block fw-bold"
            style={{ color: "#0F4392" }}
          >
            Our products
          </h1>

          <SerachBar
            showBigScreen={true}
            setProducts={setproducts}
            products={products}
          />
          <main className={styles.main}>
            <SliderFilterButton
              categories={categories}
              setactiveCateFilter={setactiveCateFilter}
              activeCateFilter={activeCateFilter}
            />
            <Row className="mt-0 mt-lg-5 w-100 mr-0" style={{ margin: 0 }}>
              <Col md={3} sm={12} className="d-none d-sm-block">
                <div
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.12)",
                  }}
                  className="d-flex justify-content-center align-items-center flex-column  "
                >
                  <h5 className="my-3">Filter by</h5>

                  <Filter
                    setvalue={setselectedUse}
                    value={selectedUse}
                    label="By uses"
                    list={uses}
                  />

                  <div
                    style={{ width: "80%" }}
                    className="d-flex justify-content-around my-3 w-100 align-items-end flex-row-reverse "
                  >
                    <button onClick={ApplyFilter} className="btn btn-primary">
                      Apply
                    </button>
                    <button
                      className="btn btn-outline-primary"
                      style={{ color: "#0F4392" }}
                      onClick={ClearFilter}
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={9} sm={12} className="d-flex flex-column">
                <div
                  className="d-none d-md-flex justify-content-start align-items-center gap-2 flex-wrap mb-3 order-2"
                  style={{ width: "100%" }}
                >
                  <div className={styles.greybox}>
                    <p className={styles.txtofboxgrey}>Diclofenac Sodium</p>
                    <Image
                      src={exit}
                      className="mx-1 fs-5"
                      alt="Next.js Logo"
                      width={8}
                      height={8}
                      priority
                    />
                  </div>
                  <div className={styles.greybox} style={{ width: "134px" }}>
                    <p className={styles.txtofboxgrey}>Sodium Chloride</p>
                    <ImageGroup
                      src={exit}
                      className="mx-1"
                      alt="Next.js Logo"
                      width={8}
                      height={8}
                      priority
                    />
                  </div>
                  <div className={styles.greybox} style={{ width: "94px" }}>
                    <p className={styles.txtofboxgrey}>Ibuprofen</p>
                    <Image
                      src={exit}
                      className="mx-1"
                      alt="Next.js Logo"
                      width={8}
                      height={8}
                      priority
                    />
                  </div>
                  <div className={styles.greybox} style={{ width: "134px" }}>
                    <p className={styles.txtofboxgrey}>Sodium Chloride</p>
                    <Image
                      src={exit}
                      className="mx-1"
                      alt="Next.js Logo"
                      width={8}
                      height={8}
                      priority
                    />
                  </div>
                </div>
                <div
                  className={`${styles.boxwhite} order-1`}
                  style={{
                    height: "76px",
                  }}
                >
                  <p className={styles.txtExplore}>Explore our products or </p>

                  <ButtonContact
                    txtColor="#0F4392"
                    bckColor="white"
                    BRColor="#0F4392"
                    text="Contact a pharmacist"
                  />
                </div>
                <Row
                  className="order-3 gap-50"
                  style={{
                    "--bs-gutter-x": "0.5rem",
                  }}
                >
                  {products?.map((item, i) => (
                    <Col
                      key={i}
                      className="col-md-6 col-lg-4 col-sm-6 col-6 mb-3"
                    >
                      <CardProduct item={item} id={item?.id} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            {/* Pagination */}

            <ReactPaginate
              breakLabel="..."
              nextLabel="التالى"
              onPageChange={handlePageClick}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="السابق"
              containerClassName={"pagination justify-content-center p-3"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />

            <div className="w-80 d-flex justify-content-start align-items-center">
              <Sheet
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                snapPoints={snapPoints}
                className="w-100 d-flex justify-content-center align-items-center"
              >
                <Sheet.Container className={styles.bottomsheet}>
                  <Sheet.Header />
                  <div className="w-100 d-flex justify-content-center align-items-center mb-3">
                    <h4 style={{ color: "#0F4392" }}>Filter by</h4>
                  </div>

                  <Sheet.Content
                    className=" d-flex"
                    style={{ width: "90%", flexDirection: "column" }}
                  >
                    {/* <DropdownFilter
                      setvalue={setselectedDisease}
                      value={selectedDisease}
                      title={"By Disease"}
                      options={diseases}
                    /> */}
                    <DropdownFilter
                      setvalue={setselectedUse}
                      value={selectedUse}
                      title={"By Uses"}
                      options={uses}
                    />
                    {/* <DropdownFilter
                      title={"By ingredients"}
                      setvalue={setselectedingredient}
                      value={selectedingredient}
                      options={ingredients}
                    /> */}
                    <div className="d-flex justify-content-between mt-5">
                      <div
                        className="btn btn-primary pb-2 pt-2 pr-5 pl-5"
                        style={{ paddingInline: "25px", width: "45%" }}
                        onClick={ApplyFilter}
                      >
                        apply
                      </div>
                      <div
                        className="btn btn-outline-primary pb-2 pt-2 pr-5 pl-5"
                        style={{ paddingInline: "25px", width: "45%" }}
                        onClick={ClearFilter}
                      >
                        Clear all
                      </div>
                    </div>
                  </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop />
              </Sheet>
            </div>
          </main>
        </Container>
      )}

      <div className="d-block d-sm-none">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block">
        <FooterDesk />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </div>
  );
};

export default products;
