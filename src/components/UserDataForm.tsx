import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface UserData {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserDataForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: uuidv4(),
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [isDirty, setIsDirty] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Data Before Saving:', userData); // Add this line
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsDirty(false);
    console.log('Data saved successfully!');
    alert('Data saved successfully!');
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>User Data Form</Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Address"
          name="address"
          value={userData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserDataForm;
