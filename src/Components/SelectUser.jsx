import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Stack, Avatar} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import photo from '../assets/test.jpg';

import axios from 'axios';



export async function SelectUser() {
    const response = await axios.post(
        'https://01rtunofc9.execute-api.eu-west-1.amazonaws.com/serverless_lambda_stage/user/get'
      );
    console.log(response.data);
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" />
                <Avatar alt="Travis Howard" src="../assets/test.jpg" />
                <Avatar alt="Cindy Baker" src="../assets/test.jpg" />
                <img src="../assets/test.jpg"></img>
            </Stack>
        </div>
    );
}