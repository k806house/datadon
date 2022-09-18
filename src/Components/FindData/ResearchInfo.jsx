//@ts-check
import React, {useEffect, useState} from "react";
import {
    Stack,
    Button,
    Box,
    Typography,
} from "@mui/material";

import {ResearchInfoView} from "../DTO/ResearchInfoView";

import axios from "axios";

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
    var research = new ResearchInfoView(props.data);
    const user_id = research.user_id;

    console.log(user_id);

    const [data, setData] = useState([]);

    useEffect(() => {
    async function fetchUsers() {
        axios
        .post(
            "https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/study/status",
            {   
                user_id: user_id,
            }, 
            {
                headers: {
                    'Authorization': `${JSON.parse(localStorage.getItem('token'))}` 
                }
            }
        )
        .then((response) => {setData(response.data);
        console.log(response.data);}
    );
    }

    fetchUsers();
    }, []);

    return (
        <div>
            <Box sx={style}>
                <Stack spacing={4}>
                    <Typography>{research.name}</Typography>
                    <Typography>{research.description}</Typography>
                    <Typography>{research.tags}</Typography>
                    <Typography>{data.created_at}</Typography>
                    <Typography>{research.created_at}</Typography>

                    <Button> Stop Research</Button>
                    <Button> Download </Button>
                </Stack>
            </Box>
        </div>
    );
}