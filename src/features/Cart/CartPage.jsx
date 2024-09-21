import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { useEffect, useState } from "react";
import { fetchAllCart } from "./cardSlice";
import Loader from "../../components/Loader";
import AuthButton from "../auth/AuthButton";
import CheckOutFooter from "../../components/CheckOutFooter";

function CartPage() {
  const dispatch = useDispatch();
  const [updatedCart, setUpdatedCart] = useState([]); // Store updated quantities
  const [showLogin, setShowLogin] = useState(true);
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.userAuth);

  useEffect(() => {
    async function fetchCarts() {
      try {
        await dispatch(fetchAllCart());
      } catch (error) {
        console.log(error);
        throw new Error("Unable to get Carts Data");
      }
    }
    fetchCarts();
  }, [dispatch]);

  useEffect(() => {
    // Update the cart state whenever cartItems change
    setUpdatedCart(cartItems);
  }, [cartItems]);

  const handleQtyChange = (id, newQty) => {
    // Update the quantity of the specific product in the cart
    setUpdatedCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const subtotal = updatedCart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (isLoading) {
    return <Loader className={"h-80"} />;
  }

  if (!user) {
    return <AuthButton onClickOverlyHide="true" />;
  }

  if (!updatedCart.length) {
    return (
      <img
        className="m-auto mt-10"
        src="src\assets\empty-cart.gif"
        alt="cart is empty"
      />
    );
  }

  return (
    <>
      {updatedCart.length &&
        updatedCart
          .map((dts, index) => (
            <CartList
              qty={dts.quantity}
              key={index}
              img={dts.product.img}
              title={dts.product.title}
              price={dts.product.price}
              id={dts.product._id}
              pack={dts.product.pack}
              onQtyChange={handleQtyChange} // Pass the handler
            />
          ))
          .reverse()}

      <div className="p-3 rounded-lg border-2 border-dashed border-primary">
        <h1 className="font-semibold text-lg">Bill Details</h1>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <h1 className="font-semibold">&#x20B9;{subtotal}</h1>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <h6 className="font-semibold">Free</h6>
        </div>
        <div className="flex justify-between border-t mt-2">
          <h1 className="font-semibold text-lg">Total</h1>
          <h1 className="font-semibold text-lg">&#x20B9;{subtotal}</h1>
        </div>
      </div>

      <section className="w-full fixed bottom-0 left-0 md:px-24 lg:px-48 overflow-hidden text-xs sm:text-sm bg-white">
        <CheckOutFooter qty={updatedCart.length} total={subtotal} />
      </section>
    </>
  );
}

export default CartPage;
