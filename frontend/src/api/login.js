import axios from "axios";
const baseUrl = "http://localhost:3000/api/users/login";

const loginUser = async (userDetails) => {
  try {
    const response = await axios.post(baseUrl, userDetails);

    if (response.status === 200) {
        return response.data;
    } else {
        console.error(`Unexpected reponse: ${response.status}`)
        throw new Error("Failed to log in");
    }
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
  }
};

export default loginUser;
