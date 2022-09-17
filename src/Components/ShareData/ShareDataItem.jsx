//@ts-check
import React from "react";
import { 
  Stack, IconButton, ListItemText, ListItemAvatar, Avatar,
  Paper} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MyDataView from "../DTO/MyDataView";

export default function ShareDataItem(props) {
  var myData = new MyDataView(props.data);
  console.log(myData);
  return (
    <Paper>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <ListItemAvatar sx={{ p: 3 }}>
          <Avatar>
            <VaccinesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={myData.title} secondary={myData.dateCreated.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) } />
        <IconButton color="primary" size="large" sx={{ margin: 3 }}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}
