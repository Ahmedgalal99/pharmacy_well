import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const Filter = ({ label, list, setvalue, value }) => {
  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-start flex-column w-100 px-2 py-2 fw-bold">
      <p className="mb-3" style={{ fontSize: "13px !important" }}>
        {label}
      </p>
      <FormControl sx={{ m: 1, width: "100%" }} size="small" className="mx-0">
        <InputLabel id="demo-select-small-label">All</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          label="Age"
          className="ms-0"
          style={{ width: "100%", margin: 0 }}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {list?.map((item, i) => (
            <MenuItem key={i} value={item?.id}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
