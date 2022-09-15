import React, { Component } from "react";

import "./FindData.css"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Button } from "@mui/material";
import { Header } from "./Header";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export class FindData extends Component {
    render() {
        return(
            <>
                <Header/>
                <div className="container">
                    <h2>My explore</h2>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {["Blood", "Result1", "Result2"].map((value) => (
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
                    > Create study </Button>
                </div>
            </>
        )
    }
}