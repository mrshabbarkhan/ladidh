import { useSelector } from "react-redux";
import { Sale_Details } from "../../utils/utils";
import FavoriteList from "./FavoriteList";

function FavoritesPage() {
  const { favoriteProducts } = useSelector((state) => state.favoriteProducts);
  if (favoriteProducts.length==0) {
    return (
      <h1 className="text-center text-primary text-2xl">
        Please Add your favorite item
      </h1>
    );
  }
  
  return (
    <>
      {favoriteProducts.map((dtl, index) => (
        <FavoriteList
          key={index}
          img={dtl.img}
          pack={dtl.pack}
          tittle={dtl.tittle}
          discount={dtl.discount}
          code={dtl.code}
          price={dtl.price}
          oldPrice={dtl.oldPrice}
        />
      ))}
    </>
  );
}

export default FavoritesPage;
