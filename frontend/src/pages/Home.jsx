import { useEffect, useState } from "react";
import messageApi from "../api/messages";
import { Box, Grid } from "@mui/material";
import ChatUI from "../components/ChatUI";
import NavBar from "../components/Navbar"

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
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ flex: 1, flexDirection: "column" }}>
            <NavBar />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ flexGrow: 1 }}>
            <ChatUI messages={messages} setMessage={setMessage} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
