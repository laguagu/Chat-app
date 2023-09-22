import { useEffect, useState } from "react";
import messageApi from "../api/messages";
import { Box } from "@mui/material";
import ChatUI from "../components/ChatUI";

export default function HomeComponent() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await messageApi.fetchMessages();
      setMessage(data);
    };
    fetchData();
  }, []);

  return (
    <Box>
      <ChatUI messages={messages} setMessage={setMessage}/>
    </Box>
  );
}
