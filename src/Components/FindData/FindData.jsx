import React from "react";
import { useState } from 'react';

import "./FindData.css"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from "@mui/system";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export function FindData() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
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
                            options={explores}
                            getOptionLabel={(option) => option.title}
                            defaultValue={[explores[0]]}
                            filterSelectedOptions
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="filterSelectedOptions"
                                placeholder="Needed data"
                            />
                            )}
                        />
                        <Button>
                            Save
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

const explores = [
    { title: 'Blood'},
    { title: 'Vactination'}
]