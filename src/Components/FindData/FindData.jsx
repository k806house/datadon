import React from "react";
import { useState } from "react";

import "./FindData.css";
import JsonData from '../../data/tags.json';

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack, IconButton, Grid, Button } from "@mui/material";


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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tags: Tag[] = JsonData;

  return (
    <>
      <h1>My data</h1>
      {/* <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid container spacing={1} justifyContent="center">
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
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search data..." />
            </Paper>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              size="large"
              sx={{ flex: 2 }}
              onClick={handleOpen}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <ListItemAvatar sx={{ p: 3 }}>
                  <Avatar>
                    <VaccinesIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Vaccination info"
                  secondary="July 20, 2022"
                />
                <IconButton color="primary" size="large" sx={{ margin: 3 }}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack> */}
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
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
              defaultValue={[tags[0].title]}
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
