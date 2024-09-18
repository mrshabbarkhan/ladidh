import { useSelector } from "react-redux";
import Card from "../Cart/Card";
import Loader from "../../components/Loader";

function TrendProducts() {
  const navigateToProductList = "/product-details";
    const { products,isLoading } = useSelector((state) => state.adminDashboard);
  return (
    <section className="mb-12">
      <h1 className="text-lg font-medium mb-3 mt-2">Product on Trend</h1>
      {isLoading ? (
        <Loader className={"h-40 w-full"} />
      ) : (
        <div className="flex gap-5 flex-wrap justify-between w-full ">
          {products?.map((dts, index) => {
            return (
              <Card
                key={index}
                id={dts._id}
                img={dts.img}
                pack={dts.pack}
                tittle={dts.title}
                price={dts.price}
                oldPrice={dts.oldPrice}
                redirect={navigateToProductList}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default TrendProducts;
