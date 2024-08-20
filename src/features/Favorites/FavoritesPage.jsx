import { Sale_Details } from "../../utils/utils";
import FavoriteList from "./FavoriteList";

function FavoritesPage() {
  return (
    <>
        {Sale_Details.map((dtl, index) => (
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
