import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import sendMessage from "../api/sendMessage";
import messageApi from "../api/messages";

const ChatUI = () => {
  const [messages, setMessage] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await messageApi.fetchMessages();
      setMessage(data);
    };
    fetchData();
  }, []);

  const handleSend = async () => {
    if (input.trim() !== "") {
      console.log(input);
      console.log(messages)
      const newMessage = {
        text: input,
        sender: "SenderId",
        receiver: "ReceiverId"
      };
      
      const sentMessage = await sendMessage(newMessage);

      if (sentMessage && sentMessage._id) {
        setMessage([...messages, sentMessage]);
      }
      
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isUser = message.sender === "user"; // Etsi tässä käyttäjä

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isUser ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: isUser ? "primary.main" : "secondary.main" }}>
          {isUser ? "U" : "B"}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isUser ? 1 : 0,
            mr: isUser ? 0 : 1,
            backgroundColor: isUser ? "primary.light" : "secondary.light",
            borderRadius: isUser ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;
