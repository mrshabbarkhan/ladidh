import { Sale_Details } from "../../utils/utils";
import Card from "../Cart/Card";

function SaleForYou() {
  const navigateToProductList = "/product-details"
  return (
    <section className="mt-6 font-medium text-lg w-full">
      <h1 className="mb-2">Sale for you</h1>
      <div className="flex gap-5 overflow-x-auto w-full ">
        {Sale_Details.map((dtl, index) => (
          <Card
            key={index}
            img={dtl.img}
            pack={dtl.pack}
            tittle={dtl.tittle}
            discount={dtl.discount}
            code={dtl.code}
            price={dtl.price}
            oldPrice={dtl.oldPrice}
            redirect={navigateToProductList}
          />
        ))}
      </div>
    </section>
  );
}

export default SaleForYou;
