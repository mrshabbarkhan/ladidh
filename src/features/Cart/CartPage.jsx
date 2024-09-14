import { useSelector } from "react-redux";
import { Sale_Details } from "../../utils/utils";
import CartList from "./CartList";

function CartPage() {

  const { cartItems } = useSelector((state) => state.cart);
  let qunatity = 1;

  
  return (
    <>
      {cartItems.map((dts, index) => (
        <CartList
          qty={qunatity}
          key={index}
          img={dts.img}
          tittle={dts.tittle}
          price={dts.price}
          oldPrice={dts.oldPrice}
        />
      ))}
      <div className="p-3 rounded-lg border-2 border-dashed border-primary">
        <h1 className="font-semibold text-lg">Bill Details</h1>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <h1 className="font-semibold">&#x20B9;{cartItems.reduce((a, p) => a + p.price,0)}</h1>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <h1 className="font-semibold">&#x20B9;0.0</h1>
        </div>
        <div className="flex justify-between border-t mt-2">
          <h1 className="font-semibold text-lg">Total</h1>
          <h1 className="font-semibold text-lg">&#x20B9;930</h1>
        </div>
      </div>
    </>
  );
}

export default CartPage;
