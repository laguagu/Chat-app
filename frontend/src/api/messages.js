import axios from "axios";
const baseUrl = "http://localhost:3000/api/messages"

const token = localStorage.getItem("use")

const config = {
  headers: { Authorization: `Bearer ${token}` }
}
const fetchMessages = async () => {
  const response = await axios.get(baseUrl,config);
  return response.data
};

const messageApi = {fetchMessages}
export default messageApi;