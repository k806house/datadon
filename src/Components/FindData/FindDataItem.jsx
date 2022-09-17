import React from "react";
import ResearchView from "../DTO/ResearchView"

export default function FindDataItem(item:ResearchView) : JSX.Element {
  return (
    <Paper>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Container>
          <h3 sx={{ p: 5 }}>{{item.title}}</h3>
        </Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <h4>500/1000</h4>
          <PeopleIcon sx={{ m: 2 }} />
          <IconButton color="primary" size="large" sx={{ mx: 3, my: 2 }}>
            <DownloadIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
