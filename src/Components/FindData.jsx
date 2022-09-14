import React, { Component } from "react";

import "./FindData.css"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from "@mui/material";
import { Header } from "./Header";

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
                            >
                                <ListItemText primary={`${value}`} />
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