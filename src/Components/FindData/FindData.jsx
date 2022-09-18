//@ts-check
import React from "react";
import { useState, useEffect } from "react";

import "./FindData.css";

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
import FindDataItem from "./FindDataItem";
import axios from "axios";

export function FindData() {
  const [openNewResearch, setOpenNewResearch] = useState(false);
  const handleOpenNewResearch = () => setOpenNewResearch(true);
  const handleCloseNewResearch = () => setOpenNewResearch(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      axios
        .post(
          "https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/study/get",
          {}, {
            headers: {
              'Authorization': `${JSON.parse(localStorage.getItem('token'))}` 
            }
          }
        )
        .then((response) => {setData(response.data.Studies);}
    );
    }

    fetchUsers();
  }, []);

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
            {data.map((research) => (
                <FindDataItem data={research}></FindDataItem>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Modal open={openNewResearch} onClose={handleCloseNewResearch}>
        <NewResearch />
      </Modal>
    </>
  );
}
