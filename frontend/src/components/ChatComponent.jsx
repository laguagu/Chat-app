import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  Container,
} from "@mui/material";

export default function ChatComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <Container maxWidth="sm">
      <h1>Messages</h1>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        style={{ height: "100vh" }}
      >
        <Paper
          elevation={2}
          style={{
            maxHeight: "40vh",
            overflow: "auto",
            padding: "16px",
            width: "100%",
          }}
        >
          {messages.map((msg, index) => (
            <Typography key={index} style={{ margin: "8px 0" }}>
              {msg}
            </Typography>
          ))}
        </Paper>
        <Box mt={2}>
          <TextField
            label="New Message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{marginRight: "6px"}}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            style={{marginTop: "18px"}}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
