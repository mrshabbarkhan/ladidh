import { useDispatch, useSelector } from "react-redux";
import SearchSvg from "../assets/ui/SearchSvg";
import {
  setDebouncedTerm,
  setSearchTerm,
} from "../features/admin/page/searchSlice";
import { useEffect } from "react";
import { addToProductDetails } from "../features/Product-list/productDetailSlice";
import { useNavigate } from "react-router-dom";

function SearchProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const { products } = useSelector((state) => state.adminDashboard);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setDebouncedTerm(searchTerm));
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, dispatch]);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClick = async(product) => {
    try {
        await dispatch(addToProductDetails(product));
        navigate("/product-details");
    } catch (error) {}
    handleClear();
  };

  const handleClear = () => {
    dispatch(setSearchTerm(""));
  };

  const filteredProducts = products?.filter((prod) =>
    prod?.title?.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  return (
    <div className="text-center absolute bottom-0 m-auto w-full translate-y-1/2 px-2 md:px-24 lg:px-48  ">
      <div className="border-2 pl-2 w-full rounded-xl flex items-center bg-white focus-within:border-primary-light overflow-hidden relative">
        <SearchSvg />
        <div className="w-full ">
          <input
            type="text"
            className=" focus:outline-none focus:ring-0 focus:border-transparent w-full ml-2 outline-none border-none"
            placeholder="Type product name to search"
            onChange={handleInputChange}
            value={searchTerm}
          ></input>
        </div>
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute top-5 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        )}
      </div>
      {searchTerm && (
        <ul className="max-h-60 overflow-auto z-20 rounded-b-md px-2 py-1 bg-white text-black absolute w-full">
          {filteredProducts?.map((data, index) => (
            <li
              onClick={() => handleClick(data)}
              key={index}
              className="py-1 px-2 rounded-md text-left font-medium mb-3"
            >
              <h1>{data.title}</h1>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchProduct;
