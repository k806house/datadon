import React, { useState } from "react";
import { 
  Stack, IconButton, Grid, Button, ListItemText, ListItemAvatar, Avatar,
  Paper, InputBase, Modal, TextField, Box 
} from "@mui/material";
import { useForm } from "react-hook-form";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import SearchIcon from "@mui/icons-material/Search";

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

export function ShareData() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

  return (
    <div>
      <h1>My data</h1>

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
        <Grid item xs={2} sx={{ display: "flex"}}>
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
            <Stack direction="row" alignItems="center" justifyContent="center">
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

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Name"
                inputProps={register('name')}
              />
              <Button
                variant="contained"
                component="label"
              >
                Select a file
                <input
                  type="file"
                  hidden
                  onChange={changeHandler}
                />
              </Button>
              {isSelected ? (
                <div>
                  <p> {selectedFile.name}</p>
                </div>
              ) : (
                <p>No file selected</p>
              )}
              
              <Button
                variant="contained"
                type="submit"
              >
                Save
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

const explores = [{ title: "Blood" }, { title: "Vactination" }];
