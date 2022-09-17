import React from "react";
import ResearchView from "../DTO/ResearchView.ts";
import {
  Stack,
  IconButton,
  Container,
  Paper
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PeopleIcon from "@mui/icons-material/People";



export default function FindDataItem(props){
  var research = new ResearchView(props.data);
  console.log(research);
  return (
    <Paper>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Container>
          <h3 sx={{ p: 5 }}>test</h3>
        </Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <h4>500/1000</h4>
          <PeopleIcon sx={{ m: 2 }} />
          <IconButton color="primary" size="large" sx={{ mx: 3, my: 2 }}>
            <DownloadIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
