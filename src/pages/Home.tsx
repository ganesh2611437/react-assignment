import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h3" gutterBottom>React Assignment</Typography>
      <Button component={Link} to="/counter" variant="contained" color="primary" style={{ margin: '10px' }}>Counter</Button>
      <Button component={Link} to="/form" variant="contained" color="primary" style={{ margin: '10px' }}>User Data Form</Button>
      <Button component={Link} to="/editor" variant="contained" color="primary" style={{ margin: '10px' }}>Rich Text Editor</Button>
      <Button component={Link} to="/dashboard" variant="contained" color="primary" style={{ margin: '10px' }}>Dashboard</Button>
    </Box>
  );
};

export default Home;
