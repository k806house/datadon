
import React, { Component } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export class Header extends Component {
    render() {
        return(
            <AppBar 
                position="static"
            >
                <Toolbar>
                    <Typography 
                        variant="h6" 
                        component="div" 
                        href="/"
                        component="a"
                        sx={{ 
                            flexGrow: 1,
                            fontFamily: "Montserrat", 
                            textDecoration: 'none',
                            color: 'inherit',
                        }}>
                        Your data is important
                    </Typography>
                    <Button
                        href="/share-data"
                        color="inherit"
                        sx={{
                            fontFamily: "Montserrat",
                        }}>
                        Share data
                    </Button>
                    <Button
                        href="/find-data"
                        color="inherit"
                        sx={{
                            fontFamily: "Montserrat"
                        }}>
                        Find data
                    </Button>
                </Toolbar>
      </AppBar>
        )
    }
}