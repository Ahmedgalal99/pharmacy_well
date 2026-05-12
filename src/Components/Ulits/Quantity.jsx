import PostCart from "@/Apis/Cart/PostCart";
import { useState } from "react";

const Quantity = ({item}) => {
  const [count, setCount] = useState(item?.quantity);
  const [imag, setimag] = useState(item?.product?.home_image);
  const [quantity, setquantity] = useState(count);
  const [id, setid] = useState(item?.product?.id);

  const SendCartFundes = async (e) => {
    // e.preventDefault();

    const formData = {
      product: id,
      quantity: -1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };

  const SendCartFunplus = async (e) => {
    // e.preventDefault();

    const formData = {
      product: id,
      quantity: 1,
    };

    const res = await PostCart(formData);
    console.log(res);
    // if (res) setData(res);

    return res;
  };

  const increase = () => {
    setid(item?.product?.id);

    setCount(count + 1);
    console.log(id);
    console.log(item);
    if (item) SendCartFunplus();
  };
  
  const incrementCount = () => {
    setCount(count + 1);
    setid(item?.product?.id);


    if (item) SendCartFunplus();
  };

  const decrementCount = () => {
    if (count !== 1) {
      setCount(count - 1);
      setid(item?.product?.id);

      if (item) SendCartFundes();
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className={`btn btn-primary rounded-0 w-25 fs-3 d-flex justify-content-center align-items-center p-0 fs-5 ${
          count === 1 && "disabled"
        }`}
        style={{ width: "30px", height: "30px" }}
        onClick={decrementCount}
      >
        -
      </button>
      <span
        className="w-50 text-center"
        style={{
          background: "rgba(238, 238, 238, 1)",
          lineHeight: "30px",
          height: "30px",
        }}
      >
        {count}
      </span>
      <button
        className="btn btn-primary rounded-0 w-25 fs-3 d-flex justify-content-center align-items-center p-0 fs-5"
        style={{ width: "30px", height: "30px" }}
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
