import { useEffect, useState } from "react";
import messageApi from "../api/messages";
import MessageList from "../components/MessagList";
import ChatComponent from "../components/ChatComponent";
import { Box, TextField, Button } from "@mui/material";

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
      <ChatComponent />
      <MessageList messages={messages} />
    </Box>
  );
}
