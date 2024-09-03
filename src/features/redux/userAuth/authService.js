import axios from "axios";

const base_url = "/api/user/";

export const getOtp = async (email) => {
  const response = await axios.post("/send-otp", { email });
  console.log(response.data);
  return response.data;
};
