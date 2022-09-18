//@ts-check
import React, { useState, useEffect } from "react";
import {
  Stack, IconButton, Grid, Button, ListItemText, ListItemAvatar, Avatar,
  Paper, InputBase, Modal, TextField, Box
} from "@mui/material";
import { useForm, useController } from "react-hook-form";
import axios from "axios";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ShareDataItem from "./ShareDataItem";
import uploadFile from "./S3Upload";
import { useNavigate } from "react-router-dom";

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
  const [data, dataSet] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const token = JSON.parse(localStorage.getItem('token'));

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [files, filesSet] = useState([{ name: "", tmp_name: "" }]);
  const [res, resSet] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 4));
    console.log("res", files);


    axios
      .post(
        "https:\//01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/exam/create",
        {
          name: data.name,
          files: files
        },
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json'
          }
        }
      ).then(function () {
        handleClose();
        window.location.reload();
      }
      );
  }

  useEffect(() => {
    async function fetchData() {
      axios
        .post(
          "https:\//01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/exam/get",
          "",
          {
            headers: {
              Authorization: token,
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => dataSet(response.data.Exams));
    }

    fetchData();
  }, []);


  useEffect(() => {
    async function hD() {
      uploadFile()
        .then((response) => resSet(response));
    }

    hD();
  }, []);

  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }

    const filename = e.target.files[0];
    uploadFile().then((result) => {
      console.log("finish");
      console.log(result);
      setSelectedFile(e.target.files[0]);
      setIsSelected(true);
      filesSet([{ name: filename.name, tmp_name: result }])
    });

  };

  return (
    <div>
      <h1>My data</h1>

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
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search data..." />
          </Paper>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex" }}>
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
          <Stack direction="column" spacing={1}>
            {
              data ? data.map((d, i) => (
                <ShareDataItem data={d} key={i}></ShareDataItem>))
                : "loading"
            }
          </Stack>
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
