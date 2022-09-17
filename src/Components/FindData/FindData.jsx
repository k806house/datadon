import React from "react";
import { useState } from "react";

import "./FindData.css";
import Tag from "../DTO/Tag.ts";
import JsonData from "../../data/tags.json";

import {
  Stack,
  IconButton,
  Grid,
  Button,
  Autocomplete,
  TextField,
  Box,
  Modal,
  Container,
  Paper,
  InputBase,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import "../ReaserchInfo";
import ResearchView from "../DTO/ResearchView.ts";
import FindDataItem from "./FindDataItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export function FindData() {
  const [openNewResearch, setOpenNewResearch] = useState(false);
  const handleOpenNewResearch = () => setOpenNewResearch(true);
  const handleCloseNewResearch = () => setOpenNewResearch(false);

  const [openResearchInfo, setOpenResearchInfo] = useState(false);
  const handleOpenResearchInfo = () => setOpenResearchInfo(true);
  const handleCloseResearchInfo = () => setOpenResearchInfo(false);

  const tags: Tag[] = JsonData;
  var data: ResearchView[] = [];
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
        <Box sx={style}>
          <Stack spacing={4}>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Name"
            />
            <TextField
              id="outlined-multiline"
              label="Required"
              multiline
              required
              rows="3"
              defaultValue="Description"
            />
            <Autocomplete
              multiple
              required
              id="tags-outlined"
              options={tags}
              getOptionLabel={(option) => option.title}
              defaultValue={[tags[0]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="filterSelectedOptions"
                  placeholder="Needed data"
                />
              )}
            />
            <Button>Save</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
