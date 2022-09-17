//@ts-check
import React, { useState } from "react";
import { 
  Stack, IconButton, Grid, Button, ListItemText, ListItemAvatar, Avatar,
  Paper, InputBase, Modal, TextField, Box 
} from "@mui/material";
import { useForm, useController } from "react-hook-form";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import SearchIcon from "@mui/icons-material/Search";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import MyDataView from "../DTO/MyDataView";
import ShareDataItem from "./ShareDataItem";
import uploadFile from "./S3Upload";

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

  const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 4));
  }

  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];
    const { name } = file;
    uploadFile();
    // console.log(s3Data);
    // const uploadUrl = s3Data['upload_link'];
    // const filenameTmp = s3Data['tmp_file_name'];
    // uploadFile(uploadUrl, filenameTmp);
    // const fileReader = new FileReader();
    // fileReader.readAsText(file);
    // fileReader.onload = function() {
    //   console.log(fileReader.result);
    // };
    // fileReader.onerror = function() {
    //   console.log(fileReader.error);
    // };

    //setValue("file", e.target.files[0]);
		setSelectedFile(e.target.files[0]);
		setIsSelected(true);
	};

  var data: MyDataView[] = [];
  data[0] = new MyDataView({
    id: 1,
    title: "test",
    dateCreated: Date.now(),
    iconId: 400
  });

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
          {
            data ? data.map((d, i) => (
            <ShareDataItem data={d} key={i}></ShareDataItem>))
            : "loading"
          }
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
                startIcon={<UploadFileIcon />}
              >
                Select a file
                <input
                  type="file"
                  hidden
                  onChange={handleFileUpload}
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
