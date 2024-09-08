import axios from "axios";

const base_url = "/api/admin/";

const getAllUsers = async () => {
  const response = await axios.post(base_url + "users");
  return response.data;
};

const getAllProducts = async () => {
  const response = await axios.get(base_url + "products");
  return response.data
};

const addProducts = async (formData) => {
  const response = await axios.post(base_url + "products", formData);
  console.log(response.data)
  return response.data;
};

const deleteProducts = async (id) => {
  const response = await axios.delete(base_url + `products/${id}`)
  return response.data
}


const addBanner = async (data) => {
  const response = await axios.post(base_url + "banner/upload", data);
  return response.data
}

const deleteBanner = async (id) => {
  const response = await axios.delete(base_url + `banner/${id}`);
  return response.data
}

const getAllBanners = async () => {
  const response = await axios.get(base_url + "banner");
  return response.data
}

const adminServices = {
  getAllUsers,
  addProducts,
  getAllProducts,
  deleteProducts,
  addBanner,
  getAllBanners,
  deleteBanner,
};

export default adminServices;
