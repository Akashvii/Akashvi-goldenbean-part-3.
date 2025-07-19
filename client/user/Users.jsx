import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Link
} from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { list } from './api-user.js';
import { Link as RouterLink } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 600,
        margin: 'auto',
        marginTop: 3,
        padding: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        All Users
      </Typography>
      <List dense>
        {users.map((item, i) => (
          <Link
            component={RouterLink}
            to={`/user/${item._id}`}
            key={i}
            underline="none"
            color="inherit"
          >
            <ListItem button>
              <ListItemAvatar>
                <Avatar>{item.name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <ArrowForward />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        ))}
      </List>
    </Paper>
  );
}