import React, { useEffect } from "react";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Postcontactus from "@/Apis/Contact";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button } from "react-bootstrap";

const ModalContent = ({ setOpen, setModalShow }) => {
  const [phone, setphone] = useState("us");
  const [Name, setName] = useState();
  const [Data, setData] = useState();
  console.log(Data);

  const HandelName = (e) => {
    setName(e.target.value);
  };
  console.log(Name);

  function handleOnChange(value) {
    setphone(value);
  }

  const SentContactUs = async (e) => {
    let Data = {
      name: Name,
      phone_number: phone,
    };

    const res = await Postcontactus(Data);
    if (res) setData(res);

    return res;
  };

  useEffect(() => {
    setTimeout(() => {
      if (Data) {
        setOpen(false);
        // setModalShow(false)
      }
    }, 2000);
  }, [Data]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      SentContactUs().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
  };
  return (
    <form className="d-flex justify-content-center m-5 flex-column">
      <div className="form-group m-2">
        <label htmlFor="exampleInputEmail1" className="my-2">
          Your Name*
        </label>
        <input
          onChange={HandelName}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Write here"
        />
      </div>
      <div className="form-group m-2">
        <label htmlFor="exampleInputPassword1" className="my-2">
          Phone Number*{" "}
        </label>
        <ReactPhoneInput
          defaultCountry={"us"}
          value={phone}
          style={{ width: "100%" }}
          onChange={handleOnChange}
        />
      </div>
      {Data ? (
        <Stack
          sx={{ width: "100%" }}
          spacing={2}
          style={{ position: "absolute", top: 0, width: "80%" }}
        >
          <Alert severity="success">Your request has been sent!</Alert>
        </Stack>
      ) : null}

      <Button
        variant="primary"
        className="w-100"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Send the request"}
      </Button>
    </form>
  );
};

export default ModalContent;
