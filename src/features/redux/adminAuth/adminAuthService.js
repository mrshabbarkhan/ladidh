import axios from "axios";

const base_url = "/api/admin/";

const getAllUsers = async () => {
    const response = await axios.post(base_url + "users")
    return response.data
}

const addProducts = async (formData) => {
    const response = await axios.post(base_url + "products", formData);
    console.log(response.data)
}


const adminServices = {
  getAllUsers,
  addProducts,
};

export default adminServices