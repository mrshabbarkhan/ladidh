import { useState } from "react";

function CartList({
  img,
  pack = 1,
  qty = 1,
  tittle,
  discount,
  code,
  price,
  oldPrice,
}) {
  const [tempQty, setTempQty] = useState(qty)
  
  return (
    <div className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg">
      <div className="grow flex flex-col justify-between">
        <div >
          <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">
            {tittle}
          </h1>
          {discount && (
            <p className="text-xs mt-2 text-orange-500">
              FLAT {discount} off Code: {code}
            </p>
          )}
          <div className="flex items-center gap-2">
            <h1 className="text-xl text-primary-dark font-semibold">
              &#x20B9; {price}
            </h1>
            <span className="line-through text-gray-500 font-medium">
              {oldPrice}
            </span>
          </div>
          <p className="text-xs font-medium text-primary-dark">{pack} pack</p>
        </div>
        <div className="border shadow w-fit py-1 px-2 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer">
          <i className="fa fa-trash-alt text-xl"></i>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img className="w-24 rounded-lg object-cover" src={img} alt="" />
        <div className="flex justify-between">
          <button onClick={()=>setTempQty(tempQty+1)} className="border border-primary-dark px-2 rounded-lg hover:text-white hover:bg-primary-dark transition font-semibold">
            +
          </button>
          <h1 className="font-semibold">{tempQty}</h1>
          <button onClick={()=>setTempQty(tempQty>1?tempQty-1:tempQty)} className="border border-primary-dark px-2 rounded-lg hover:text-white hover:bg-primary-dark transition font-semibold">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
