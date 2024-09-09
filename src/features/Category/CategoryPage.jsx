import { useEffect } from "react";
import Categories from "./Categories";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategory } from "../redux/adminAuth/adminActionSlice";

function CategoryPage({ onClick }) {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCategory())
  },[])
  const navigateToProducts = "/product-list"
  const { categories } = useSelector((state) => state.adminDashboard);
  return (
    <>
      <Category>
        {categories?.map((dts, index) => (
          <Categories
            key={index}
            id= {dts._id}
            img={dts.img}
            tittle={dts.name}
            redirect={onClick || navigateToProducts}
          />
        ))}
      </Category>
    </>
  );
}

export default CategoryPage;
