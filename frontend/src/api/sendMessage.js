import axios from "axios";
const baseUrl = "http://localhost:3000/api/messages";

const sendMessage = async (message) => {
  try {
    const response = await axios.post(baseUrl, message);
    if(response.data && response.data._id) {
        return response.data;
    } else {
        console.error('Invalid message returned:', response.data);
    }
  } catch (error) {
    console.error("Error sending message: ", error);
  }
};

export default sendMessage;
