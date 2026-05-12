import React from "react";
import styles from "@/styles/products.module.css";

const SearchInput = ({ setProducts }) => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.boxsearch}>
      <input
        type="text"
        className="form-control w-100"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="search-icon"
        onChange={() => handleSearch(e)}
      />
    </div>
  );
};

export default SearchInput;
