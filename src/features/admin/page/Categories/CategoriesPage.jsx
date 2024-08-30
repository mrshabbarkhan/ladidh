import React from "react";
import CategoryPage from "../../../Category/CategoryPage";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import Category from "../../../Category/Category";
import Categories from "../../../Category/Categories";

import { Categories_Items } from "../../../../utils/utils";

const CategoriesPage = () => {
    const debouncedTerm = useSelector((state) => state.search.debouncedTerm);
    const doubleCategoriesItems = [
      ...Categories_Items,
      ...Categories_Items,
      ...Categories_Items,
    ];
     const filterbyCategory = doubleCategoriesItems.filter((ctg) =>
       ctg.tittle.toLowerCase().includes(debouncedTerm.toLowerCase())
     );
  return (
    <section>
      <h1 className="font-bold text-2xl text-center tracking-wide ">
        Categories
      </h1>
      <div className="my-3 mb-10 flex justify-center">
        <SearchBar placeholder={"serach by category..."} />
      </div>
      <Category>
        {filterbyCategory.length ? (
          filterbyCategory.map((dts, index) => (
            <Categories
              key={index}
              img={dts.img}
              tittle={dts.tittle}
              redirect={"/admin"}
            />
          ))
        ) : (
          <h1 className="text-center text-xl text-red-600 font-medium">
            No match found
          </h1>
        )}
      </Category>
    </section>
  );
};

export default CategoriesPage;
