import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

export default function SimpleAppBar() {
  const [auth, setAuth] = useState(false);
  const [profileImage, setProfileImage] = useState(AccountCircle)

  useEffect(() => {
    const token = localStorage.getItem("userToken")
    if (token) {
      setProfileImage('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80')
      setAuth(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    console.log("User has logged out");
    setAuth(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>

          {auth ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={profileImage} alt="Profile picture" style={{ marginRight: '5px' }} />
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}