import { useSelector } from "react-redux";
import { Sale_Details } from "../../../../utils/utils";
import SearchBar from "../../components/SearchBar";
import ProductCard from "./ProductCard";
import AddProductPopup from "../../components/AddProductPopup";

const increaseSaleDetails = [...Sale_Details, ...Sale_Details, ...Sale_Details];

function ProductPage() {
  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);
  const filteredProducts = increaseSaleDetails.filter((prod) =>
    prod.tittle.toLowerCase().includes(debouncedTerm.toLowerCase())
  );
  return (
    <section>
      <h1 className="font-bold text-2xl text-center tracking-wide">Products</h1>
      <div className="mb-5 mt-3 flex justify-center">
        <SearchBar placeholder={"search by products..."} />
        <div className="absolute right-5 sm:right-14 top-6">
          <AddProductPopup />
        </div>
      </div>
      <div className="flex justify-center sm:justify-start gap-5 flex-wrap">
        {filteredProducts.length ? (
          filteredProducts.map((dts, index) => {
            return <ProductCard key={index} id={dts.id} info={dts} />;
          })
        ) : (
          <h1 className="text-center text-xl text-red-600 font-medium">
            No match found
          </h1>
        )}
      </div>
    </section>
  );
}

export default ProductPage;
