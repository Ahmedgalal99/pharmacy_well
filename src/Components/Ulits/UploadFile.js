import React, { useState } from "react";
import Image from "next/image";
import upload from "../../assets/img/arrow_up.png";

const UploadFile = ({ setfile }) => {
  const [img, setImg] = useState(upload);
  const handleChangeFile = (e) => {
    const imgUpload = URL.createObjectURL(e.target.files[0]);
    setImg(imgUpload);
    setfile(e.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="upload-img" className="text-center">
        <Image src={img} alt="Next.js Logo" width={50} height={50} priority />
        <div
          className="add-files mt-3 mb-2 fs-5 btn d-block fw-bold"
          style={{
            width: "128px",
            height: "40px",
            border: "1px solid #858383",
          }}
        >
          Add Files
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        id="upload-img"
        onChange={handleChangeFile}
        style={{
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          background: "transparent",
          position: "absolute",
          opacity: "0",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default UploadFile;
