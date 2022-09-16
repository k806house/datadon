import React, { Component } from "react";

import "./FindData.css"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Button } from "@mui/material";
import { Header } from "./Header";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export class FindData extends Component {
    render() {
        return(
            <>
                <Container maxWidth="m">
                    <Box sx={{ bgcolor: 'white', height: '100vh' }}>
                        My explore
                    </Box>
                </Container>
                {/* <div className="container">
                    My explore
                    <List sx={{ 
                        width: '100%',
                        maxWidth: 360, 
                        bgcolor: 'background.paper',
                        maxHeight: 300,
                        overflow: 'auto',
                        }}
                    >
                        {["Blood", "Result1", "Result2","Blood", "Result1", "Result2",
                          "Blood", "Result1", "Result2",
                          "Blood", "Result1", "Result2"].map((value) => (
                            <ListItem
                                key={value}
                                disableGutters
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                      <SaveAltIcon />
                                    </IconButton>
                                }
                            >
                                
                                <ListItemText primary={`${value}`}/>
                                <ListItemText primary={`50/100`} />
                            </ListItem>
                        ))} 
                    </List>
                    <Button
                        href="/find-data/create-study"
                    > 
                        Create study 
                    </Button>
                </div> */}
            </>
        )
    }
}