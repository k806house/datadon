import { useEffect, useState } from 'react';
import { Stack, Button, Autocomplete, TextField, Box } from "@mui/material";
import axios from "axios";
import { useForm, useController, Controller } from "react-hook-form";

import JsonData from "../../data/tags.json";

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

export function NewResearch() {

  const [tags, tagsSet] = useState([{id: 1, name: "Blood"}]);
  useEffect(() => {
    async function fetchTags() {
      axios
        .post(
          "https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/tag/get"
        )
        .then((response) => {
          tagsSet(response.data.tags)
        });
    }

    fetchTags();
  }, []);

  const {
      control,
      register,
      handleSubmit,
      formState: { errors },
      setValue,
  } = useForm();
  const onSubmit = (data) => {};

  const [research, setResearch] = useState([]);

//   const addResearchHandler = () => {
//     if (commentsRef.current && commentsRef.current.value) {
//       const newResearch = {
//         id: 1,
//         user_id: 1,
//         name: ""
//         description: ""
//         tags: [],
//         created_at: "2022-07-03",
//     }
//     fetch("http://localhost:8010/comments", {
//       method: 'POST',
//       headers: new Headers({
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       }),
//       body: JSON.stringify(newComment)
//       })
//       .then(response => response.json())
//       .then(data => {
//            let updatedComments = comments;
//            updatedComments.push(data)
//            setComments([...comments], updatedComments);
      
//            setLoading(false);
//            setError(null);
//       })
//       .catch(error => {
//           setLoading(false);
//           setError('Something went wrong, please try again later.');
//       });
//     }
//  }

  return (
    <div>
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
            <TextField
              id="outlined-multiline"
              label="Required"
              multiline
              required
              rows="3"
              defaultValue="Description"
              inputProps={register('description')}
            />
            <Controller
              name="tags"
              render={(props) => 
                <Autocomplete
                  {...props}
                  multiple
                  required
                  id="tags-outlined"
                  options={tags}
                  getOptionLabel={(option) => option.name}
                  filterSelectedOptions
                  defaultValue={[tags[0]]}
                  onChange={(e, data) => setValue("tags", data)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="filterSelectedOptions"
                      placeholder="Needed data"
                    />
                  )}
                />
              }
              control={control}
            />
            <Button
              variant="contained"
              type="submit"
              // onClick={saveResearch}
            >
              Save
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
