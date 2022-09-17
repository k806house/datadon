import {
    Stack,
    Button,
    Box,
    Typography,
  } from "@mui/material";

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

export function ResearchInfo() {
    return (
        <div>
            <Box sx={style}>
                <Stack spacing={4}>
                    <Typography>Name</Typography>
                    <Typography>Description</Typography>
                    <Typography>Сколько собрано</Typography>
                    <Typography>Список тегов</Typography>
                    <Button> Stop Research</Button>
                    <Button> Download </Button>
                </Stack>
            </Box>
        </div>
    );
}