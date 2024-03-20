import { useState } from 'react'

import './App.css'
import "./App.css";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';

import Stack from '@mui/material/Stack';

function App() {
  
  return (
    <>
    <Container maxWidth="xl">
      <CssBaseline />
    <AppBar position= "static">
      <Toolbar>
        <Typography variant='h3' sx={{ flexGrow: 1, textAlign: 'center', mb:8 }}>Welcome to React Router
       </Typography>
      
      </Toolbar>
    </AppBar>
    
      </Container>

      <nav>
      <Stack direction="row" spacing={2}>
      <Link to ={"/"}>Home</Link>
      <Link to ={"/about"}>About</Link>
      <Link to ={"/contact"}>Contact</Link>
      </Stack>
      </nav>
      <Outlet />
    
    </>
  )
}

export default App
