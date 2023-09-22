import axios from "axios";
const baseUrl = "http://localhost:3000/api/messages"

const fetchMessages = async () => {
  const response = await axios.get(baseUrl);
  return response.data
};

const messageApi = {fetchMessages}
export default messageApi;