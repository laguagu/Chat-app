import { Box, Grid } from "@mui/material";
import ChatUI from "../components/ChatUI";
import NavBar from "../components/Navbar"

export default function HomeComponent() {

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
            <ChatUI/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
