import { useState } from "react";
import img from "../../assets/images/product/1.jpg";
import FreeDevSvg from "../../assets/ui/FreeDevSvg";
import StarSvg from "../../assets/ui/StarSvg";
import { Link } from "react-router-dom";

function ProductDetails() {
  const [tempQty, setTempQty] = useState(1)
  return (
    <>
      <div className="box_shadow absolute top-0 left-0 right-0 object-cover ">
        <img className="w-full  opacity-85 " src={img} alt="" />
        <section className="bg-white h-52 pt-2 px-2 md:px-24 lg:px-48 reletive top-0 overflow-hidden pb-80 md:pb-56">
          <h1 className="font-semibold text-xl">
            Goat + Chicken Skinless + Cleaned Prawns
          </h1>
          <p className="my-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center gap-3 font-semibold">
            <span className="flex items-center gap-1">
              <StarSvg /> 4.6
            </span>
            <span className="flex items-center border-x-2 px-2 gap-2">
              <i className="fa-regular fa-clock text-primary"></i>6 - 7 min
            </span>
            <span className="flex items-center text-primary gap-1">
              <FreeDevSvg /> Free Delivery
            </span>
          </div>
          <div className="text-sm pt-4 ">Price</div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-primary font-bold">&#x20B9; 990</h1>
              <span className="line-through text-gray-500 font-medium text-lg">
                1100
              </span>
            </div>
            <div className="flex items-center">
              <span onClick={()=>setTempQty(tempQty>1?tempQty-1:tempQty)} className="bg-primary text-white px-3 font-semibold text-lg rounded-lg">
                -
              </span>
              <span className="text-lg font-semibold w-10 text-center">{tempQty}</span>
              <span onClick={()=>setTempQty(tempQty+1)} className="bg-primary text-white px-2 font-semibold text-lg rounded-lg">
                +
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-white text-center z-30 px-2  py-3 fixed bottom-0 left-0">
        <div className="z-30 bg-primary text-md font-semibold py-2 max-w-5xl rounded-xl m-auto text-white">
          <Link to={"/cart"}>
          ADD TO CART
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
