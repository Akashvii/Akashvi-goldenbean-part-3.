import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { Link } from 'react-router-dom';
import { create } from './api-user';

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    error: '',
  });

  const [open, setOpen] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickSubmit = () => {
  const user = {
    name: values.name || undefined,
    email: values.email || undefined,
    password: values.password || undefined,
  };

  console.log('Submitting user:', user);

  create(user)
    .then((data) => {
      console.log('Response:', data);
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          name: '',
          email: '',
          password: '',
          error: '',
        });
        setOpen(true);
      }
    })
    .catch((err) => {
      console.error('API call failed:', err);
      setValues({ ...values, error: 'Something went wrong. Please try again.' });
    });
};

  return (
    <div>
      <Card
        sx={{
          maxWidth: 400,
          margin: '0 auto',
          marginTop: 4,
          padding: 2,
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Sign Up
          </Typography>

          <TextField
            id="name"
            label="Name"
            fullWidth
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            fullWidth
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
          />

          {values.error && (
            <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
              {values.error}
            </Typography>
          )}
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', marginBottom: 2 }}>
          <Button color="primary" variant="contained" onClick={clickSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/Signin">
            <Button color="primary" variant="contained" onClick={handleClose}>
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
