import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 2210, amt: 2290 },
  // Add more data as needed
];

const Dashboard: React.FC = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </Box>
  );
};

export default Dashboard;
