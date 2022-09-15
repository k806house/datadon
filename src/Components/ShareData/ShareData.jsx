import React, { Component } from "react";
import { Stack, IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AddIcon from '@mui/icons-material/Add';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Header } from "./../Header";

export class ShareData extends Component {
    render() {
        return (
          <div>
            <Header />
            <h1>My data</h1>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={1}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BloodtypeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Blood" secondary="Jan 9, 2022" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ThermostatIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Body temperature"
                    secondary="Jan 7, 2022"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <VaccinesIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Vaccination info"
                    secondary="July 20, 2022"
                  />
                </ListItem>
                <ListItem>
                  <IconButton color="primary" aria-label="add to shopping cart" size="large">
                    <AddIcon />
                  </IconButton>
                </ListItem>
              </List>
            </Stack>
          </div>
        );
    }
}