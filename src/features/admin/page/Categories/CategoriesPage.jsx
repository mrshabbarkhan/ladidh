import React from "react";
import CategoryPage from "../../../Category/CategoryPage";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import Category from "../../../Category/Category";
import Categories from "../../../Category/Categories";

import { Categories_Items } from "../../../../utils/utils";
import AddProductPopup from "../../components/AddProductPopup";
import AddCategoryPopup from "../../components/AddCategoryPopup";
import CategoryCardForAdmin from "./CategoryCardForAdmin";

const CategoriesPage = () => {
    const debouncedTerm = useSelector((state) => state.search.debouncedTerm);
    const doubleCategoriesItems = [
      ...Categories_Items,
      ...Categories_Items,
    ];
     const filterbyCategory = doubleCategoriesItems.filter((ctg) =>
       ctg.tittle.toLowerCase().includes(debouncedTerm.toLowerCase())
     );
  return (
    <section>
      <div className="mb-5 mt-3 flex justify-center items-center sm:justify-between">
        <h1 className="font-bold text-2xl text-center tracking-wide absolute top-5 sm:relative sm:top-0">
          Category
        </h1>
        <div className="mt-10 sm:mt-0 flex w-fit items-center gap-3 absolute right-5 sm:right-14 top-6">
          <SearchBar placeholder={"search by category..."} />
          <AddCategoryPopup />
        </div>
      </div>
      <div className="categories_img  p_text flex justify-center sm:justify-between flex-wrap  gap-x-20  gap-y-8 sm:px-4 mt-8">
        {filterbyCategory.length ? (
          filterbyCategory.map((dts, index) => (
            <CategoryCardForAdmin
              key={index}
              img={dts.img}
              title={dts.tittle}
              redirect={"/admin"}
            />
          ))
        ) : (
          <h1 className="text-center text-xl text-red-600 font-medium">
            No match found
          </h1>
        )}
      </div>
    </section>
  );
};

export default CategoriesPage;
