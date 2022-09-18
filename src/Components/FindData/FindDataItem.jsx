//@ts-check
import {React, useState} from "react";
import ResearchView from "../DTO/ResearchView";
import { ResearchInfo } from "./ResearchInfo";
import { Stack, IconButton, Container, Paper, Modal } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PeopleIcon from "@mui/icons-material/People";

export default function FindDataItem(props) {
  var research = new ResearchView(props.data);
  console.log(research);

  const [openResearchInfo, setOpenResearchInfo] = useState(false);
  const handleOpenResearchInfo = () => setOpenResearchInfo(true);
  const handleCloseResearchInfo = () => setOpenResearchInfo(false);

  return (
    <>
      <Paper>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Container>
            <h3 onClick={handleOpenResearchInfo} sx={{ p: 5 }}>{research.title}</h3>
          </Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <h4>{research.cntParticipantFound}/{research.cntParticipant}</h4>
            <PeopleIcon sx={{ m: 2 }} />
            <IconButton color="primary" size="large" sx={{ mx: 3, my: 2 }}>
              <DownloadIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>

      <Modal open={openResearchInfo} onClose={handleCloseResearchInfo}>
        <ResearchInfo />
      </Modal>
    </>
  );
}
