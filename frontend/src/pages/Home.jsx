import { AppBar, Box, Grid } from "@mui/material";
import ChatUI from "../components/ChatUI";
import NavBar from "../components/Navbar"
import SimpleAppBar from "../components/SimpleAppBar";

export default function HomeComponent() {

  return (
    <Box>
      <SimpleAppBar/>
      {/* Spacing lisää elementtien paddingia */}
      <Grid container spacing={0}> 
        <Grid item xs={3}>
          <Box>
            <NavBar/>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box>
            <ChatUI/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
