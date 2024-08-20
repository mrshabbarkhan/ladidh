
import NavigationBar from "../../components/Navs/NavigationBar";
import { Categories_Items } from "../../utils/utils";
import Categories from "../Category/Categories";
import Category from "../Category/Category";
import OfferForYou from "./OfferForYou";
import SaleForYou from "./SaleForYou";
import TrendProducts from "./TrendProducts";

function HomePage() {
  return (
    <>
      <div className="pt-16 relative overflow-hidden">
        <Category heading={"Categories"}>
          {Categories_Items.map((dts) => (
            <Categories key={dts.tittle} img={dts.img} tittle={dts.tittle} />
          ))}
        </Category>
        <OfferForYou />
        <SaleForYou />
        <TrendProducts />
        <NavigationBar />
      </div>
    </>
  );
}

export default HomePage;
