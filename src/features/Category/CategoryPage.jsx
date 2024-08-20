import Categories from "./Categories";
import { Categories_Items } from "../../utils/utils";
import Category from "./Category";
const doubleCategoriesItems = [
  ...Categories_Items,
  ...Categories_Items,
  ...Categories_Items,
];

function CategoryPage() {
  return (
    <>
      <Category>
        {doubleCategoriesItems.map((dts,index) => (
          <Categories key={index} img={dts.img} tittle={dts.tittle} />
        ))}
      </Category>
    </>
  );
}

export default CategoryPage;
