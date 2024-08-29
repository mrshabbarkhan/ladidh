import { Tranding_Products } from "../../../../utils/utils";
import Card from "../../../Cart/Card";

function ProductPage() {
  return (
    <section>
      <h1 className="font-medium text-lg">Products</h1>
      <div className="flex">
        {Tranding_Products.map((dts, index) => {
          return (
            <Card
              key={index}
              id={dts.id}
              img={dts.img}
              pack={dts.pack}
              tittle={dts.tittle}
              price={dts.price}
              oldPrice={dts.oldPrice}
              //   redirect={navigateToProductList}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductPage;
