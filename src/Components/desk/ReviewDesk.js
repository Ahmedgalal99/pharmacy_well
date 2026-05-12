import Image from "next/image";
import thanksrate from "../../assets/img/thanksrate.png";
import Rateing from "../../Components/Ulits/Rateing";
import UploadFile from "../../Components/Ulits/UploadFile";
import upload from "../../assets/img/arrow_up.png";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtomReview from "../../Components/Requests/ButtomReview";
import PostReview from "../../Apis/PostReview";
import { useRouter } from "next/router";

const ReviewDesk = ({ modalAddReview }) => {
  const [open, setOpen] = useState(false);
  const [description, setdescription] = useState("");
  const [file, setfile] = useState();
  const [rate, setRate] = useState(0);
  const router = useRouter();
  const Onchangemessage = (e) => {
    setdescription(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 420,
    bgcolor: "background.paper",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    padding: "7px",
  };

  const SendReview = async () => {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("file", file);
    formData.append("rate", rate);
    formData.append("user", 1);
    const res = await PostReview(formData);
    console.log(res, "ressss");
    setOpen(false);
    if (res) {
      modalAddReview.current.style.opacity = "0";
      handleOpen();
      console.log("done");
    }
    return res;
  };

  return (
    <>
      <main style={{ maxWidth: "100%" }}>
        <div className="d-flex justify-content-center align-items-center"></div>
        <h5>Rate your experience</h5>
        <div
          className={
            "d-flex justify-content-around align-items-around flex-row"
          }
        >
          <Rateing rate={rate} setRate={setRate} />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column w-80 m-auto">
          <div className="form-group w-100">
            <label className="mb-2 fs-5" htmlFor="exampleFormControlTextarea1">
              Leave your message*
            </label>
            <textarea
              onChange={Onchangemessage}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
            ></textarea>
          </div>
          <p className="text-start fs-5 w-100 mb-2 mt-2">Upload a file</p>
          <div className="d-flex justify-content-center align-items-center flex-column box-grey position-relative">
            <UploadFile setfile={setfile} />
            <p className="text-muted m-2 fs-6">Or drop files to upload</p>
          </div>
          <button
            onClick={SendReview}
            className="btn btn-primary mb-3 mt-3 w-100"
          >
            Submit
          </button>
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
              ></Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                className="text-center"
              >
                <div>
                  <Image
                    src={thanksrate}
                    alt="Next.js Logo"
                    width={366}
                    height={270}
                    priority
                  />
                  <h3>Your review has been submitted successfully</h3>
                </div>

                <div
                  className="w-100 d-flex justify-content-center align-items-center mt-3"
                  onClick={() => {
                    if (router.pathname === "/testimonials") {
                      router.reload();
                    } else {
                      router.push("/testimonials");
                    }
                  }}
                >
                  <ButtomReview
                    txtColor="white"
                    bckColor="#0F4392"
                    BRColor="#0F4392"
                    text="Go To REVIEWS Page"
                  />
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      </main>
    </>
  );
};

export default ReviewDesk;
