import {
    Stack,
    Button,
    Box,
    Typography,
} from "@mui/material";

import {ResearchInfoView} from "../DTO/ResearchInfo.ts";

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

export function ResearchInfo(props) {
    var data = new ResearchInfoView({
        title: "Metabolic Syndrome and Disorders of Carbohydrate Metabolism",
        description: "Carbohydrate metabolism disorders are a group of metabolic disorders. Normally your enzymes break carbohydrates down into glucose (a type of sugar). If you have one of these disorders, you may not have enough enzymes to break down the carbohydrates. Or the enzymes may not work properly. This causes a harmful amount of sugar to build up in your body. That can lead to health problems, some of which can be serious. Some of the disorders are fatal.These disorders are inherited. Newborn babies get screened for many of them, using blood tests. If there is a family history of one of these disorders, parents can get genetic testing to see whether they carry the gene. Other genetic tests can tell whether the fetus has the disorder or carries the gene for the disorder.Treatments may include special diets, supplements, and medicines. Some babies may also need additional treatments, if there are complications. For some disorders, there is no cure, but treatments may help with symptoms.",
        requiredData: ["Blood", "Vaccination"],
        date: "2022-03-17",
        cntParticipants: 567,
        totalCntParticipants: 1000
      });

    return (
        <div>
            <Box sx={style}>
                <Stack spacing={4}>
                    <Typography>{data.title}</Typography>
                    <Typography>{data.description}</Typography>
                    <Typography>{data.requiredData}</Typography>
                    <Typography>{data.date}</Typography>
                    <Typography>{data.cntParticipants}</Typography>
                    <Typography>{data.totalCntParticipants}</Typography>
                    <Button> Stop Research</Button>
                    <Button> Download </Button>
                </Stack>
            </Box>
        </div>
    );
}