import axios from "axios";
const baseUrl = "http://localhost:3000/api/messages";

// Apufunktio bearer tokenin hakuun
const getConfig = () => {
  const token = localStorage.getItem("userToken");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

const fetchMessages = async () => {
  const config = getConfig()
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const sendMessage = async (message) => {
  try {
    const response = await axios.post(baseUrl, message, getConfig());
    if (response.data && response.data._id) {
      return response.data;
    } else {
      console.error("Invalid message returned:", response.data);
    }
  } catch (error) {
    console.error("Error sending message: ", error);
  }
};

const messageApi = { fetchMessages, sendMessage };
export default messageApi;
