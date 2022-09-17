//@ts-check
import React from "react";
import { useState } from "react";

import "./FindData.css";
import Tag from "../DTO/Tag";
import JsonData from "../../data/tags.json";

import {
  Stack,
  IconButton,
  Grid,
  Button,
  Modal,
  Paper,
  InputBase,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { NewResearch } from "./NewResearch";
import ResearchView from "../DTO/ResearchView";
import FindDataItem from "./FindDataItem";


export function FindData() {
  const [openNewResearch, setOpenNewResearch] = useState(false);
  const handleOpenNewResearch = () => setOpenNewResearch(true);
  const handleCloseNewResearch = () => setOpenNewResearch(false);

  var data = [];
  data[0] = new ResearchView({
    id: 1,
    title: "test",
    file: "test",
    cntParticipant: 400,
    cntParticipantFound: 40 
  });

  return (
    <>
      <h1>My research</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search explorations..."
            />
          </Paper>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
            sx={{ flex: 2 }}
            onClick={handleOpenNewResearch}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="column" spacing={1}>
            <FindDataItem data={data[0]}></FindDataItem>
          </Stack>
        </Grid>
      </Grid>

      <Modal open={openNewResearch} onClose={handleCloseNewResearch}>
        <NewResearch />
      </Modal>
    </>
  );
}
