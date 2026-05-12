import Image from "next/image";
import React from "react";
import Category from "../../assets/img/category.png";
import Rectangle from "../../assets/img/Rectangle.png";
import Link from "next/link";

function CategorySliderDesk({ item }) {
  return (
    <Link href={`/products/${item?.id}`} className="w-100">
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 w-100 h-100">
        <div className="CategorySliderCarddesk">
          {item?.icon_image && (
            <Image
              style={{
                width: "85%",
                height: "80%",
              }}
              src={item?.icon_image}
              width={100}
              height={100}
              alt=""
            />
          )}
        </div>
        <h5
          className="mt-4 text-black fw-normal overflow-hidden"
          style={{ height: "55px" }}
        >
          {item?.name}
        </h5>
      </div>
    </Link>
  );
}

export default CategorySliderDesk;
