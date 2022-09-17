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
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";

import { ResearchInfo } from  "../ResearchInfo";
import { NewResearch } from "../NewResearch";

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
            <Paper>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Container>
                  <h3 onClick={handleOpenResearchInfo} sx={{ p: 5 }}>Blood exploration</h3>
                </Container>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <h4>500/1000</h4>
                  <PeopleIcon sx={{ m: 2 }} />
                  <IconButton
                    color="primary"
                    size="large"
                    sx={{ mx: 3, my: 2 }}
                  >
                    <DownloadIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Grid>
      </Grid>

      <Modal open={openNewResearch} onClose={handleCloseNewResearch}>
        <NewResearch />
      </Modal>

      <Modal open={openResearchInfo} onClose={handleCloseResearchInfo}>
        <ResearchInfo />
      </Modal>
    </>
  );
}
