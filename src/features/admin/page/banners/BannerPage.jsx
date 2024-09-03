import { useEffect, useState } from "react";
import banner1 from "../../../../../src/assets/images/banner/banner1.jpg";
import banner2 from "../../../../../src/assets/images/banner/banner2.jpg";
import banner3 from "../../../../../src/assets/images/banner/banner3.jpg";
import { useDispatch } from "react-redux";
import {
  addNewBanner,
  fetchBanners,
} from "../../../redux/adminAuth/adminActionSlice";

const banner = [banner1, banner2, banner3];

function BannerPage() {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(fetchBanners());
    console.log("from");
  }, [refresh]);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const data = new FormData();
      data.append("img", selectedFile);
      dispatch(addNewBanner(data));
      setRefresh(!refresh);
    }
  };

  return (
    <>
      <span className="text-xl font-medium">Banners</span>
      <input
        type="file"
        accept="image/*"
        placeholder="Add"
        className="hidden"
        id="fileInput"
        onChange={handleChange}
      ></input>
      <label
        htmlFor="fileInput"
        className="bg-blue-300 px-2 py-1 mx-2 rounded-md hover:bg-blue-500 text-white cursor-pointer"
      >
        Add
      </label>

      <div className="flex flex-wrap gap-5 mt-2">
        {banner.map((banner, idx) => (
          <div key={idx} className="relative">
            <img className="rounded-md" src={banner} alt="" />
            <span className="absolute bottom-2 right-2 flex space-x-2 float-end mt-2">
              <div className="bg-white border shadow w-fit py-.5 px-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer">
                <i className="fa fa-trash-alt "></i>
              </div>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default BannerPage;
