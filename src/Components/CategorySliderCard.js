import Image from "next/image";
import React from "react";
import Link from "next/link";

function CategorySliderCard({ item }) {
  return (
    <Link href={`/products/${item?.id}`}>
      <div
        className="my-5 mx-0 px-0 flex-column d-flex justify-content-center align-items-center"
        style={{
          width: "100px",
        }}
      >
        <div className="CategorySliderCard">
          {item?.icon_image && (
            <Image
              className="product"
              src={item?.icon_image}
              alt="Next.js Logo"
              width={150}
              height={100}
              priority
            />
          )}
        </div>
        <div className="mt-4" style={{ color: "black", height: "20px" }}>
          {item?.name?.toLowerCase()}
        </div>
      </div>
    </Link>
  );
}

export default CategorySliderCard;
