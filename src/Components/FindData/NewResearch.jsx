import { Stack, Button, Autocomplete, TextField, Box } from "@mui/material";

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

  return (
    <div>
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
    </div>
  );
}
