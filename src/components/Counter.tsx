import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { animated, useSpring } from 'react-spring';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);

  const backgroundColor = useSpring({
    backgroundColor: `rgba(0, 150, 136, ${Math.min(count / 10, 1)})`,
  });

  return (
    <animated.div style={backgroundColor}>
      <Box p={4} textAlign="center">
        <Typography variant="h4">Counter: {count}</Typography>
        <Button onClick={handleIncrement} variant="contained" color="primary">Increment</Button>
        <Button onClick={handleDecrement} variant="contained" color="secondary">Decrement</Button>
        <Button onClick={handleReset} variant="contained">Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
