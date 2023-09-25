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
import messageApi from "../api/messages";
import jwt_decode from "jwt-decode";
import { useNavigate, Navigate } from "react-router-dom";

const ChatUI = () => {
  const [messages, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const [decodedToken, setDecodeToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      // Ohjataan takaisin /login sivulle jos token puuttuu
      console.error("No token found");
      navigate("/login");
      return;
    }

    try {
      const decoded = jwt_decode(token);
      setDecodeToken(decoded);
      setUserEmail(decoded.email);
      // Jos tässä vaiheessa ei ole virheitä token on kelvollinen

      const fetchData = async () => {
        const data = await messageApi.fetchMessages();
        setMessage(data);
      };

      fetchData();
    } catch (error) {
      console.error("Invalid token", error);
      navigate("/login");
    }
  }, []);

  const handleSend = async () => {
    if (input.trim() !== "") {
      console.log(input);
      console.log(messages);
      const newMessage = {
        text: input,
        sender: decodedToken.email,
        receiver: "ReceiverId",
      };

      const sentMessage = await messageApi.sendMessage(newMessage);

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
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message._id} message={message} userEmail={userEmail} />
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

const Message = ({ message, userEmail }) => {
  if (!userEmail) {
    return null; // Palauttaa null, jos decodedToken on vielä alustamaton.
  }
  const isUser = message.sender === userEmail;
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
