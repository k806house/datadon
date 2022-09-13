import React, { Component } from "react";
import { Button } from '@mui/material';

import "./Home.css";
import { ShareData } from "./ShareData"

import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Routes
  } from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div className='wrap'>
                <h1 className="caption">
                    Your data is important.
                </h1>

                <div className='buttons'>
                    <Button
                        href="/share-data"
                        sx={{
                            color: '#ffffff91',
                            fontSize: 20,
                            fontFamily: "Montserrat",
                        }}>
                    Share data
                    </Button>
                    <Button
                        sx={{
                            color: '#ffffff91',
                            fontSize: 20,
                            fontFamily: "Montserrat"
                        }}>
                    Find data
                    </Button>
                </div>
            </div> 
        );
    }
}