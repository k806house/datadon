import { Stack, Button, Autocomplete, TextField, Box } from "@mui/material";
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
  const tags: Tag[] = JsonData;

  const {
      control,
      register,
      handleSubmit,
      formState: { errors },
      setValue,
  } = useForm();
  const onSubmit = (data) => console.log(JSON.stringify(data, null, 4));

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
                  getOptionLabel={(option) => option.title}
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
            >
            Save
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}
